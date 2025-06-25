window.crisp = window.crisp || {};
crisp.accordion = (function() {
  function toggleAccordion(e) {
    const header = e.target.closest('.crisp-accordion-header');
    if (!header) return;
    const item = header.parentElement;
    item.classList.toggle('crisp-active');
  }
  function init() {
    document.addEventListener('click', toggleAccordion);
  }
  return { init };
})();