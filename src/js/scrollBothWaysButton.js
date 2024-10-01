// js/scrollBothWaysButton.js

document.addEventListener('DOMContentLoaded', function () {
  const scrollBothWaysButton = document.getElementById('scrollBothWaysButton'); // Przycisk przewijania
  const scrollDownButton = document.getElementById('scrollDownButton'); // Przycisk w sekcji hero
  const header = document.getElementById('header'); // Header
  const footer = document.getElementById('footer'); // Footer
  let scrollTimeout;
  let lastScrollTop = window.pageYOffset; // Zapamiętujemy pozycję przewinięcia
  let scrollDirection = 'down'; // Domyślny kierunek przewijania

  // Początkowa widoczność przycisku w sekcji hero
  scrollDownButton.classList.remove('hidden');

  if (scrollBothWaysButton && scrollDownButton && header && footer) {
    scrollBothWaysButton.style.display = 'none'; // Początkowo ukryty przycisk scroll-both-ways

    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout); // Resetowanie timera przy każdym skrolowaniu
      const footerRect = footer.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const currentScrollTop = window.pageYOffset;

      // Określenie kierunku przewijania
      scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';

      // Obracanie ikony w zależności od kierunku przewijania
      const icon = scrollBothWaysButton.querySelector('svg');
      if (scrollDirection === 'up') {
        icon.style.transform = 'rotate(180deg)'; // Obróć ikonę do góry
      } else {
        icon.style.transform = 'rotate(0deg)'; // Obróć ikonę w dół
      }

      // Aktualizujemy pozycję przewinięcia
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

      // Jeśli przewiniemy więcej niż 100px i header jest poza ekranem
      if (
        window.pageYOffset > 100 &&
        footerRect.top > windowHeight &&
        headerRect.bottom < 0
      ) {
        scrollBothWaysButton.style.display = 'block'; // Pokaż przycisk scroll-both-ways
        scrollDownButton.classList.add('hidden'); // Ukryj przycisk hero-scroll-down-button
      } else {
        scrollBothWaysButton.style.display = 'none'; // Ukryj przycisk scroll-both-ways

        // Pokaż przycisk w sekcji hero, gdy jest w górnej części strony
        if (window.pageYOffset < 100) {
          scrollDownButton.classList.remove('hidden'); // Pokaż przycisk hero-scroll-down-button
        }
      }

      // Ukryj przycisk po 3 sekundach bezczynności lub jeśli widać header/footer
      scrollTimeout = setTimeout(() => {
        if (
          footerRect.top <= windowHeight || // Footer widoczny
          headerRect.bottom >= 0 || // Header widoczny
          scrollDownButton.classList.contains('hidden') === false // Hero-scroll button widoczny
        ) {
          scrollBothWaysButton.style.display = 'none'; // Ukryj scroll-both-ways button
        }
      }, 3000); // 3 sekundy bezczynności
    });

    // Przycisk przewija w górę lub w dół w zależności od pozycji
    scrollBothWaysButton.addEventListener('click', () => {
      if (scrollDirection === 'up') {
        // Przewiń do góry, gdy użytkownik przewijał w górę
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        // Przewiń w dół, gdy użytkownik przewijał w dół
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      }
    });
  } else {
    console.error(
      'Element #scrollBothWaysButton, #scrollDownButton, #header, or #footer not found in the DOM.'
    );
  }
});
