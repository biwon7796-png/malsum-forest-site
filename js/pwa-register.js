/* Register the optional offline-reading service worker without changing site navigation. */
if ('serviceWorker' in navigator && window.isSecureContext) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(error => {
      console.warn('말씀의 숲 오프라인 기능을 등록하지 못했습니다.', error);
    });
  });
}
