const toggle = document.getElementById('dark-mode-toggle');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('header').classList.toggle('dark-mode');
  document.querySelector('footer').classList.toggle('dark-mode');
  document.querySelector('.toggle-container').classList.toggle('dark-mode');
});
