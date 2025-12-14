const themeToggleBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
htmlEl.setAttribute('data-theme', storedTheme);
} else {
  // Default to dark theme if no preference is set in localStorage
  const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (userPrefersDark) {
    htmlEl.setAttribute('data-theme', 'dark');
  } else {
    htmlEl.setAttribute('data-theme', 'light');
  }
}
themeToggleBtn.addEventListener('click', () => {
const currentTheme = htmlEl.getAttribute('data-theme');
const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
htmlEl.setAttribute('data-theme', newTheme);
localStorage.setItem('theme', newTheme);
});