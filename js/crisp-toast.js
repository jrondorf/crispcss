export const toast = {
  show: (msg) => {
    let el = document.querySelector('.crisp-toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'crisp-toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3000);
  }
};