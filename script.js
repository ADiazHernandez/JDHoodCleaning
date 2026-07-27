document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

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
