window.crisp = window.crisp || {};
crisp.modal = (function() {
  function open(selector) {
    document.querySelector(selector)?.classList.add('crisp-show');
  }
  function close(selector) {
    document.querySelector(selector)?.classList.remove('crisp-show');
  }
  function init() {
    document.addEventListener('click', e => {
      if (e.target.matches('[data-crisp-modal-open]')) {
        open(e.target.getAttribute('data-crisp-modal-open'));
      }
      if (e.target.matches('[data-crisp-modal-close]')) {
        close(e.target.getAttribute('data-crisp-modal-close'));
      }
    });
  }
  return { init, open, close };
})();