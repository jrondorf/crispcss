document.querySelectorAll('.crisp-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    tab.parentElement.querySelectorAll('.crisp-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const contents = tab.closest('.preview-box').querySelectorAll('.crisp-tab-content');
    contents.forEach((c, i) => {
      c.classList.toggle('active', i === [...tab.parentElement.children].indexOf(tab));
    });
  });
});