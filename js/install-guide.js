/* Optional PWA install guidance. No automatic prompts or popups. */
(() => {
  const trigger = document.getElementById('install-entry');
  const layer = document.getElementById('install-dialog');
  const close = document.getElementById('install-close');
  const steps = document.getElementById('install-steps');
  const action = document.getElementById('install-native');
  if (!trigger || !layer || !close || !steps || !action) return;

  let deferredPrompt = null;
  let lastFocus = null;
  const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;
  const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const android = /Android/i.test(navigator.userAgent);

  const showEntry = () => { trigger.hidden = isStandalone(); };
  const addSteps = lines => {
    steps.replaceChildren();
    for (const line of lines) {
      const li = document.createElement('li');
      li.textContent = line;
      steps.appendChild(li);
    }
  };
  const closeDialog = () => {
    layer.hidden = true;
    document.removeEventListener('keydown', onKey);
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  };
  function onKey(event) {
    if (event.key === 'Escape') closeDialog();
    if (event.key === 'Tab') {
      const items = [...layer.querySelectorAll('button:not([hidden])')];
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
  }
  const openDialog = () => {
    lastFocus = document.activeElement;
    action.hidden = !deferredPrompt;
    if (ios) {
      addSteps(['Safari에서 이 사이트를 열어주세요.', '공유 버튼을 누르고 ‘홈 화면에 추가’를 선택하세요.', '추가를 누르면 홈 화면에서 말씀의 숲을 실행할 수 있습니다.']);
    } else if (android) {
      addSteps(['Chrome 또는 삼성 인터넷에서 이 사이트를 열어주세요.', '브라우저 메뉴(⋮)에서 ‘앱 설치’ 또는 ‘홈 화면에 추가’를 선택하세요.', '메뉴 문구는 브라우저에 따라 다를 수 있습니다.']);
    } else {
      addSteps(['Chrome 또는 Edge에서 말씀의 숲을 여세요.', '주소창의 설치 아이콘이나 브라우저 메뉴에서 설치를 선택하세요.', '설치 메뉴가 없다면 브라우저의 홈페이지 바로가기 기능을 이용하세요.']);
    }
    layer.hidden = false;
    document.addEventListener('keydown', onKey);
    close.focus();
  };
  trigger.addEventListener('click', openDialog);
  close.addEventListener('click', closeDialog);
  layer.addEventListener('click', event => { if (event.target === layer) closeDialog(); });
  action.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    const promptEvent = deferredPrompt;
    deferredPrompt = null;
    action.hidden = true;
    try {
      await promptEvent.prompt();
      await promptEvent.userChoice;
    } catch (error) {
      console.warn('앱 설치 안내:', error);
    }
    closeDialog();
    showEntry();
  });
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredPrompt = event;
    if (!layer.hidden) action.hidden = false;
    showEntry();
  });
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    closeDialog();
    trigger.hidden = true;
  });
  window.matchMedia('(display-mode: standalone)').addEventListener?.('change', showEntry);
  showEntry();
})();
