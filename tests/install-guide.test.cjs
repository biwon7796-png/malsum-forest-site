const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync('index.html','utf8');
const js = fs.readFileSync('js/install-guide.js','utf8');

test('homepage has install button, accessible dialog, and loaded script', () => {
  for(const snippet of ['id="install-entry"','id="install-dialog" hidden','role="dialog"','aria-modal="true"','id="install-steps"','id="install-native"','src="/js/install-guide.js"']) assert.ok(html.includes(snippet),snippet);
});
test('PWA site keeps manifest and offline registration', () => {
  assert.ok(html.includes('rel="manifest"'));
  assert.ok(html.includes('src="/js/pwa-register.js"'));
});
function simulate({standalone=false,ios=false,android=false}={}) {
  const handlers = {};
  const elements = new Map();
  const active = {focus(){}};
  function el(id) {
    if (!elements.has(id)) {
      const callbacks = {};
      const o = {hidden:id==='install-entry'||id==='install-dialog'||id==='install-native', textContent:'',children:[], callbacks,
        addEventListener(type,fn){callbacks[type]=fn;},
        focus(){document.activeElement=this;},
        replaceChildren(){this.children=[];},
        appendChild(node){this.children.push(node);},
        querySelectorAll(){return [el('install-close'),el('install-native')].filter(b=>!b.hidden);}
      };
      elements.set(id,o);
    }
    return elements.get(id);
  }
  const document = {activeElement:active,getElementById:el,createElement:()=>({textContent:''}),
    addEventListener(type,fn){handlers[type]=fn;},removeEventListener(type){delete handlers[type];}};
  const mm = {matches:standalone,addEventListener(){}};
  const window = {navigator:{standalone},matchMedia:()=>mm,addEventListener(type,fn){handlers[type]=fn;}};
  const navigator={userAgent:ios?'iPhone':android?'Android':'Windows', platform:ios?'iPhone':'Win32',maxTouchPoints:0};
  vm.runInNewContext(js,{document,window,navigator,console});
  return {el,handlers};
}
test('browser visitors see an install entry; installed standalone app does not',()=>{
  assert.equal(simulate().el('install-entry').hidden,false);
  assert.equal(simulate({standalone:true}).el('install-entry').hidden,true);
});
test('iOS and Android guidance is specific and dismissible',()=>{
  for(const setup of [{ios:true,needle:'Safari'},{android:true,needle:'Chrome'}]){
    const s=simulate(setup);s.el('install-entry').callbacks.click();
    assert.equal(s.el('install-dialog').hidden,false);
    assert.ok(s.el('install-steps').children.some(x=>x.textContent.includes(setup.needle)));
    s.el('install-close').callbacks.click();
    assert.equal(s.el('install-dialog').hidden,true);
  }
});
test('install prompt only starts after a click and appinstalled hides entry',async()=>{
  const s=simulate({android:true});
  let prompted=0; const event={preventDefault(){},prompt:async()=>{prompted++},userChoice:Promise.resolve({outcome:'accepted'})};
  s.handlers.beforeinstallprompt(event);
  assert.equal(prompted,0);
  s.el('install-entry').callbacks.click();
  assert.equal(s.el('install-native').hidden,false);
  await s.el('install-native').callbacks.click();
  assert.equal(prompted,1);
  s.handlers.appinstalled();
  assert.equal(s.el('install-entry').hidden,true);
});
