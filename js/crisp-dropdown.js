document.addEventListener('click', e => {
  document.querySelectorAll('.crisp-dropdown').forEach(dd => dd.classList.remove('open'));
  if (e.target.closest('.crisp-dropdown-toggle')) {
    e.target.closest('.crisp-dropdown').classList.toggle('open');
  }
});