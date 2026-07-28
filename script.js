document.getElementById('year').textContent = new Date().getFullYear();

const themeToggle = document.querySelector('.theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark-mode', isDark);

  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggle.innerHTML = isDark
      ? '<i class="ti ti-sun" aria-hidden="true"></i><span>Light mode</span>'
      : '<i class="ti ti-moon" aria-hidden="true"></i><span>Dark mode</span>';
  }

  localStorage.setItem('theme', theme);
}

const preferredTheme = localStorage.getItem('theme') || 'light';
applyTheme(preferredTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.hasAttribute('hidden') === false;
    if (isOpen) {
      mobileNav.setAttribute('hidden', '');
      navToggle.setAttribute('aria-expanded', 'false');
    } else {
      mobileNav.removeAttribute('hidden');
      navToggle.setAttribute('aria-expanded', 'true');
    }
  });
}
