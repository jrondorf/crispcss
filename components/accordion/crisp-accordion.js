crisp.accordion = {
  init() {
    document.querySelectorAll('.crisp-accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.crisp-accordion-item');
        item.classList.toggle('active');
      });
    });
  }
};