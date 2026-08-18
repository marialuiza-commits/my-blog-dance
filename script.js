const toggleBtn = document.getElementById('toggle-theme');

toggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  toggleBtn.querySelector('span').textContent = newTheme === 'dark' ? 'Modo Claro' : 'Modo Escuro';
});