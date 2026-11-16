/* Malsum Forest Bible Literary Map — shared progress across all 3 views, v2.
 * Passage IDs from reading table are authoritative; canonical references are
 * separate unless the normalized book + chapter:verse range matches exactly.
 * Existing v1 localStorage records are preserved. No server calls.
 */
(function () {
"use strict";
const KEY="malsumforest:bible-literary-map:read:v1";
const frame=document.getElementById("reader"); if(!frame)return;
let read={};let storageOK=true;
let refreshUI=null;
try{const old=JSON.parse(localStorage.getItem(KEY)||"{}");if(old&&typeof old==="object"&&!Array.isArray(old))for(const [key,val] of Object.entries(old)){
  if((/^B\d{2}-P\d{4,}$/.test(key)||key.startsWith("REF:"))&&typeof val==="string")read[key]=val;
}}catch(e){storageOK=false;}
function save(){try{localStorage.setItem(KEY,JSON.stringify(read));storageOK=true;}catch(e){storageOK=false;}}
function book(doc){return(doc.querySelector('[data-testid="crumb-book"]')?.textContent||doc.querySelector('[data-testid="book-title"]')?.textContent||"현재 성경").trim();}
function norm(s){return String(s||"").replace(/\s+/g,"").replace(/[‐‑‒–—−~〜]/g,"-").replace(/[：]/g,":").replace(/[．]/g,".").trim();}
function refKey(s){return "REF:"+norm(s);}
function validID(id){return /^B\d{2}-P\d{4,}$/.test(id||"");}
function rows(doc){return [...doc.querySelectorAll('table[data-testid="reading-table"] tbody tr[data-passage-row]')].filter(x=>validID(x.dataset.passageRow));}
function labelFromCell(cell){return [...cell.childNodes].filter(n=>n.nodeType===3).map(n=>n.textContent).join(" ").trim()||cell.getAttribute("data-malsum-passage")||cell.textContent.replace(/^\s*읽음\s*/,"").trim();}
function passage(row){const cell=row.querySelector("td:first-child");if(!cell)return "";const existing=cell.dataset.malsumPassage;if(existing)return existing;const s=labelFromCell(cell);cell.dataset.malsumPassage=s;return s;}
function isRead(row){return Boolean(read[row.dataset.passageRow]||read[refKey(passage(row))]);}
function setRead(row,checked){const id=row.dataset.passageRow,ref=refKey(passage(row));if(checked){const date=new Date().toISOString();read[id]=date;read[ref]=date;}else{delete read[id];delete read[ref];}save();}
function setCanonical(ref,checked,doc){const key=refKey(ref);if(checked)read[key]=new Date().toISOString();else delete read[key];
// When this canonical reference is EXACTLY one of the book's reading ranges,
// update its passage ID too. Do not infer completion from related subject matter.
for(const row of rows(doc)){if(refKey(passage(row))!==key)continue;if(checked)read[row.dataset.passageRow]=read[key];else delete read[row.dataset.passageRow];}
save();}
function css(doc){if(doc.getElementById("malsum-progress-css-v2"))return;const st=doc.createElement("style");st.id="malsum-progress-css-v2";st.textContent=[
".malsum-progress-box{margin:12px 0 18px;padding:14px 16px;border:1px solid #c5d8ce;border-radius:10px;background:#f0f6f1;color:#173f35;line-height:1.65}",
".malsum-progress-box strong{display:block;font-size:15px}.malsum-progress-box progress{display:block;width:100%;height:11px;accent-color:#246a50;margin:8px 0}",
".malsum-progress-note{font-size:12px;color:#466756}.malsum-progress-next{margin-top:8px;border:1px solid #8eaea1;background:white;color:#174d39;border-radius:6px;padding:8px 11px;font:inherit;min-height:40px;cursor:pointer}",
".malsum-checkbox{display:inline-flex;align-items:center;gap:7px;font-size:13px;color:#145741;font-weight:700;cursor:pointer;line-height:1.55}",
".malsum-checkbox input{width:19px;height:19px;flex:0 0 auto;accent-color:#266c4e;cursor:pointer}",
".malsum-checkbox input:focus-visible{outline:3px solid #3399b8;outline-offset:3px}",
".unit-panel .ph{display:flex;align-items:center;flex-wrap:wrap;gap:6px 10px}",
".unit-panel .ph .pt{margin:0}",
".unit-panel .ph .malsum-inline-read{margin-left:4px;padding:3px 5px;min-height:34px;white-space:nowrap}",
".unit-panel .ph.malsum-inline-done .pt{color:#236a4d}",
".malsum-map-readings h3{margin:0 0 8px;font-size:14px;color:#184a38}",
".malsum-map-total{font-size:12px;color:#29604a;display:inline-block;margin-left:8px}",
"tr.malsum-checked>td:first-child{background:#edf7ee}",
".malsum-canon-note{margin:7px 0 13px;font-size:12px;color:#516c61}",
"@media print{.malsum-progress-box,.malsum-map-readings,.malsum-checkbox,.malsum-map-total,.malsum-canon-note{display:none!important}tr.malsum-checked>td:first-child{background:none!important}}"
].join("\n");doc.head.append(st);}
function checkbox(doc,id,text,kind){
const lab=doc.createElement("label");lab.className="malsum-checkbox";
const inp=doc.createElement("input");inp.type="checkbox";inp.dataset.malsumKind=kind;inp.dataset.malsumKey=id;inp.setAttribute("aria-label",text+" 읽음 표시");
const span=doc.createElement("span");span.textContent="읽음";lab.append(inp,span);return lab;}
function ensureBox(doc,container,tag){
let el=container.querySelector('[data-malsum-progress="'+tag+'"]');
if(!el){el=doc.createElement("section");el.dataset.malsumProgress=tag;el.className="malsum-progress-box";el.innerHTML='<strong data-progress-title></strong><progress max="1" value="0"></progress><div data-progress-status class="malsum-progress-note"></div>';container.prepend(el);}return el;}
function markBox(el,label,done,total,next){
el.querySelector("[data-progress-title]").textContent=label+" · "+done+" / "+total;
const progress=el.querySelector("progress");progress.max=total||1;progress.value=done;
el.querySelector("[data-progress-status]").textContent=next||((total&&done===total)?"모두 읽었습니다.":"");
}
function renderTable(doc,r){
const tbl=doc.querySelector('table[data-testid="reading-table"]'),card=tbl?.closest(".card");if(!tbl||!card)return;
const el=ensureBox(doc,card,"table");let done=0,next=null;
for(const row of r){const cell=row.querySelector("td:first-child");if(!cell)continue;const ref=passage(row);const id=row.dataset.passageRow;
let inp=cell.querySelector('input[data-malsum-kind="passage"]');if(!inp){const cb=checkbox(doc,id,ref,"passage");cell.prepend(cb,doc.createElement("br"));inp=cb.querySelector("input");}
inp.checked=isRead(row);row.classList.toggle("malsum-checked",inp.checked);
if(inp.checked)done++;else if(!next)next={row,ref};}
markBox(el,book(doc)+" 통독 단락",done,r.length,next?"다음 읽을 곳: "+next.ref:"");
let btn=el.querySelector(".malsum-progress-next");
if(!btn){btn=doc.createElement("button");btn.className="malsum-progress-next";btn.type="button";btn.textContent="다음 읽을 곳 보기";el.append(btn);btn.addEventListener("click",()=>{const row=rows(doc).find(x=>!isRead(x));row?.scrollIntoView({behavior:"smooth",block:"center"});});}
btn.hidden=!next;
let note=el.querySelector(".malsum-progress-storage");if(!note){note=doc.createElement("div");note.className="malsum-progress-note malsum-progress-storage";el.append(note);}
note.textContent=storageOK?"같은 브라우저에 저장됩니다. 다른 기기와 자동 동기화되지 않습니다.":"저장 권한이 없어 새로고침 후 기록이 사라질 수 있습니다.";
}
function unitMapping(doc,r){
const groups=[...doc.querySelectorAll('table[data-testid="reading-table"] tbody tr')];
const mapping=new Map();let current="";
for(const el of groups){if(el.matches("tr[data-unit-row]")){current=el.dataset.unitRow;mapping.set(current,[]);}else if(el.matches("tr[data-passage-row]")&&current&&mapping.has(current))mapping.get(current).push(el);}
return mapping;}
function renderMap(doc,r){
const main=doc.querySelector("#view-map");if(!main)return;
const list=main.querySelector("#literary-structure-list");if(!list)return;
const mapping=unitMapping(doc,r),done=r.filter(isRead).length;
let sum=main.querySelector('[data-malsum-progress="map"]');
if(!sum){sum=doc.createElement("section");sum.className="malsum-progress-box";sum.dataset.malsumProgress="map";sum.innerHTML='<strong data-progress-title></strong><progress max="1" value="0"></progress><div data-progress-status class="malsum-progress-note"></div>';list.before(sum);}
markBox(sum,book(doc)+" 문학지도 통독 진도",done,r.length,"세부단락 제목 옆의 체크박스로 읽음을 기록하세요.");
// Earlier prototype used a duplicate checklist. Remove it and attach checkboxes
// directly to the real per-passage heading (.ph > .pr + h4.pt).
list.querySelectorAll(".malsum-map-readings").forEach(el=>el.remove());
for(const unit of list.querySelectorAll("button[data-unit]")){
  const id=unit.dataset.unit,unitRows=mapping.get(id)||[];
  const panel=unit.closest("li")?.querySelector(".unit-panel");
  if(!panel||!unitRows.length)continue;
  const entries=[...panel.querySelectorAll(".ph")].filter(el=>el.querySelector("h4.pt"));
  const assigned=new Set();
  for(let i=0;i<entries.length;i++){
    const ph=entries[i],heading=ph.querySelector("h4.pt"),range=ph.querySelector(".pr");
    const title=heading.textContent.trim(),ref=(range?.textContent||"").trim();
    // Resolve against the canonical reading table, scoped to this literary unit.
    // Avoid silently linking a different passage if the title or range disagrees.
    let row=unitRows.find(x=>{
      if(assigned.has(x.dataset.passageRow))return false;
      const rowTitle=x.querySelector('td[data-label="읽기 제목"]')?.textContent?.trim();
      const rowRange=passage(x).replace(/^\S+\s+/,"").trim();
      return rowTitle===title && norm(rowRange)===norm(ref);
    });
    if(!row)row=unitRows.find(x=>!assigned.has(x.dataset.passageRow)&&x.querySelector('td[data-label="읽기 제목"]')?.textContent?.trim()===title);
    if(!row)continue;
    const pid=row.dataset.passageRow;
    assigned.add(pid);
    let inp=ph.querySelector('input[data-malsum-kind="passage"]');
    if(inp && inp.dataset.malsumKey!==pid){inp.closest(".malsum-checkbox")?.remove();inp=null;}
    if(!inp){
      const cb=checkbox(doc,pid,passage(row),"passage");
      cb.classList.add("malsum-inline-read");
      ph.append(cb);
      inp=cb.querySelector("input");
    }
    inp.checked=isRead(row);
    ph.classList.toggle("malsum-inline-done",inp.checked);
  }
  let indicator=unit.querySelector(".malsum-map-total");
  if(!indicator){
    indicator=doc.createElement("span");
    indicator.className="malsum-map-total";
    indicator.setAttribute("aria-live","polite");
    const arrow=unit.querySelector(".arrow");
    if(arrow)unit.insertBefore(indicator,arrow);else unit.append(indicator);
  }
  indicator.textContent=unitRows.filter(isRead).length+"/"+unitRows.length+" 읽음";
}
}
function renderCanon(doc,r){
const tbl=doc.querySelector('table[data-testid="canon-table"]'),card=tbl?.closest(".card");if(!tbl||!card)return;
const canonRows=[...tbl.querySelectorAll("tbody tr")].filter(row=>row.querySelector("td:first-child"));
const box=ensureBox(doc,card,"canon");let count=0;
for(const row of canonRows){const cell=row.querySelector("td:first-child");const ref=cell.dataset.malsumCanonRef||labelFromCell(cell);cell.dataset.malsumCanonRef=ref;const key=refKey(ref);
let inp=cell.querySelector('input[data-malsum-kind="canon"]');
if(!inp){const cb=checkbox(doc,key,ref,"canon");cell.prepend(cb,doc.createElement("br"));inp=cb.querySelector("input");}
const matching=r.find(x=>refKey(passage(x))===key);
inp.checked=Boolean(read[key]||(matching&&isRead(matching)));
if(inp.checked)count++;row.classList.toggle("malsum-checked",inp.checked);}
markBox(box,book(doc)+" 정경 연결본문 읽음",count,canonRows.length,"연결본문을 직접 읽은 뒤 체크하세요.");
let note=card.querySelector(".malsum-canon-note");
if(!note){note=doc.createElement("p");note.className="malsum-canon-note";tbl.before(note);}
note.textContent="정경 연결표의 다른 성경 본문은 별도의 통독 기록입니다. 문학지도·읽기표와 정확히 같은 본문 범위인 경우에만 동기화됩니다.";
}
function setup(){
let doc;try{doc=frame.contentDocument;}catch(e){return;}
if(!doc||!doc.body||doc.documentElement.dataset.malsumProgressV2)return;
doc.documentElement.dataset.malsumProgressV2="true";css(doc);
let queued=false;
function render(){queued=false;const r=rows(doc);renderTable(doc,r);renderMap(doc,r);renderCanon(doc,r);}
function schedule(){if(queued)return;queued=true;(doc.defaultView||window).requestAnimationFrame(render);}
refreshUI=schedule;
doc.addEventListener("change",ev=>{
const input=ev.target.closest?.("input[data-malsum-kind]");if(!input)return;
if(input.dataset.malsumKind==="passage"){
const row=rows(doc).find(x=>x.dataset.passageRow===input.dataset.malsumKey);if(!row)return;
setRead(row,input.checked);
}else if(input.dataset.malsumKind==="canon"){
const raw=input.closest("td")?.dataset.malsumCanonRef;if(!raw)return;
setCanonical(raw,input.checked,doc);
}
schedule();
});
doc.addEventListener("click",ev=>{if(ev.target.closest?.("button[data-unit],button[data-view]")){schedule();setTimeout(schedule,90);}},true);
const observer=new MutationObserver(changes=>{
for(const ch of changes){if(ch.type!=="childList")continue;const found=[...ch.addedNodes].some(n=>n.nodeType===1&&(n.matches?.('tr[data-passage-row],tr[data-unit-row],#literary-structure-list,#view-table,#view-canon,.unit-panel,.view')||n.querySelector?.('tr[data-passage-row],tr[data-unit-row],#literary-structure-list,table[data-testid="canon-table"]')));
if(found){schedule();break;}}
});observer.observe(doc.body,{childList:true,subtree:true});
schedule();
}
frame.addEventListener("load",setup);try{if(frame.contentDocument?.readyState==="complete")setup();}catch(e){}
/* Standalone backup format; import never deletes existing checkmarks.
 * Non-HTTPS or private sessions may prohibit localStorage: fail visibly. */
const FORMAT="malsumforest-bible-literary-map-progress";
const VERSION=1;
const status=document.getElementById("progress-status");
const picker=document.getElementById("progress-file");
function message(text){if(status)status.textContent=text;}
function isValidKey(key){return /^B\d{2}-P\d{4,}$/.test(key)||/^REF:[^\u0000-\u001f]{1,180}$/.test(key);}
function validatedEntries(entries){
  if(!entries||typeof entries!=="object"||Array.isArray(entries))throw Error("진도 데이터 형식이 올바르지 않습니다.");
  const keys=Object.keys(entries);
  if(keys.length>12000)throw Error("진도 항목이 허용 범위를 초과했습니다.");
  const clean=Object.create(null);
  for(const k of keys){
    const value=entries[k];
    if(!isValidKey(k)||typeof value!=="string"||!Number.isFinite(Date.parse(value))||value.length>40){
      throw Error("지원하지 않는 진도 항목이 있습니다.");
    }
    clean[k]=value;
  }
  return clean;
}
document.getElementById("progress-export")?.addEventListener("click",()=>{
  try{
    // Re-read storage for consistency in case another tab changed progress.
    const stored=JSON.parse(localStorage.getItem(KEY)||"{}");
    const entries=validatedEntries(stored);
    const backup={format:FORMAT,version:VERSION,exportedAt:new Date().toISOString(),entries};
    const content=JSON.stringify(backup,null,2);
    const blob=new Blob([content],{type:"application/json;charset=utf-8"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;a.download="말씀의숲_성경문학지도_통독진도_"+new Date().toISOString().slice(0,10)+".json";
    document.body.append(a);a.click();a.remove();
    window.setTimeout(()=>URL.revokeObjectURL(url),1000);
    message("통독 진도 "+Object.keys(entries).length+"개 항목을 백업했습니다. 파일을 안전한 곳에 보관하세요.");
  }catch(e){message("내보내기에 실패했습니다: "+e.message);}
});
document.getElementById("progress-import")?.addEventListener("click",()=>picker?.click());
picker?.addEventListener("change",async()=>{
  const file=picker.files?.[0];if(!file)return;
  try{
    if(file.size>2*1024*1024)throw Error("백업 파일은 2MB 이하여야 합니다.");
    const incoming=JSON.parse(await file.text());
    if(!incoming||incoming.format!==FORMAT||incoming.version!==VERSION)
      throw Error("말씀의 숲 성경문학지도에서 내보낸 JSON 파일만 가져올 수 있습니다.");
    const entries=validatedEntries(incoming.entries);
    const saved=validatedEntries(JSON.parse(localStorage.getItem(KEY)||"{}"));
    const merged=Object.assign(Object.create(null),saved);
    let added=0;
    for(const [key,value] of Object.entries(entries)){
      const before=merged[key];
      if(!before){merged[key]=value;added++;}
      else if(Date.parse(value)>Date.parse(before))merged[key]=value;
    }
    localStorage.setItem(KEY,JSON.stringify(merged));
    read=merged;storageOK=true;
    refreshUI?.();
    message("가져오기 완료: 새로운 읽음 기록 "+added+"개 추가. 기존 기록은 유지했습니다.");
  }catch(e){message("가져오지 못했습니다: "+e.message);}
  finally{picker.value="";}
});

})();
