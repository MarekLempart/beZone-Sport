// js/modal-menu.js

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Zamykanie menu po kliknięciu poza jego obszar
  document.addEventListener('click', event => {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnOpenBtn = openMenuBtn.contains(event.target);

    // Jeśli kliknięto poza menu i nie kliknięto na przycisk otwierający, zamknij menu
    if (
      !isClickInsideMenu &&
      !isClickOnOpenBtn &&
      mobileMenu.classList.contains('is-open')
    ) {
      toggleMenu();
    }
  });

  // Zamykanie menu mobilnego na szerszych ekranach w przypadku zmiany orientacji urządzenia
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
