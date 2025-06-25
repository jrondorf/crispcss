export const modal = {
  open: (id) => {
    document.getElementById(id)?.classList.add('active');
  },
  close: (id) => {
    document.getElementById(id)?.classList.remove('active');
  }
};
document.addEventListener('click', e => {
  if (e.target.matches('[data-crisp-modal-close]')) {
    e.target.closest('.crisp-modal-backdrop')?.classList.remove('active');
  }
});