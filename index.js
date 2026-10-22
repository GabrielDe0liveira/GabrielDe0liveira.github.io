(() => {
  const body = document.body;
  const button = document.getElementById('theme-toggle');
  const year = document.getElementById('current-year');
  const storageKey = 'gabriel-portfolio-theme';

  const setTheme = (theme) => {
    const isDark = theme === 'dark';
    body.classList.toggle('dark', isDark);
    if (button) {
      button.innerHTML = isDark
        ? '<i class="fa-solid fa-sun" aria-hidden="true"></i>'
        : '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
      button.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
      button.setAttribute('title', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
    }
  };

  const savedTheme = localStorage.getItem(storageKey);
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  setTheme(savedTheme || preferredTheme);

  button?.addEventListener('click', () => {
    const nextTheme = body.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  });

  if (year) year.textContent = new Date().getFullYear();
})();
