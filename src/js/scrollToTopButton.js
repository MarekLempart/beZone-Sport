// js/scrollToTopButton.js

// document.addEventListener('DOMContentLoaded', function () {
//   const scrollToTopButton = document.getElementById('scrollToTopButton');
//   const scrollDownButton = document.getElementById('scrollDownButton'); // Dodany przycisk z sekcji hero
//   const header = document.getElementById('header'); // Header
//   const footer = document.getElementById('footer'); // Footer

//   if (scrollToTopButton && scrollDownButton && header && footer) {
//     scrollToTopButton.style.display = 'none'; // Ukryj przycisk na początku

//     window.addEventListener('scroll', () => {
//       const footerRect = footer.getBoundingClientRect();
//       const headerRect = header.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Jeśli użytkownik przewinął więcej niż 100px i footer oraz header nie są widoczne
//       if (
//         window.pageYOffset > 100 &&
//         footerRect.top > windowHeight &&
//         headerRect.bottom < 0
//       ) {
//         scrollToTopButton.style.display = 'block'; // Pokaż przycisk scroll-to-top
//         scrollDownButton.classList.add('hidden'); // Ukryj przycisk w sekcji hero
//       } else {
//         scrollToTopButton.style.display = 'none'; // Ukryj przycisk scroll-to-top
//         scrollDownButton.classList.remove('hidden'); // Pokaż przycisk w sekcji hero
//       }
//     });

//     scrollToTopButton.addEventListener('click', () => {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       });
//     });
//   } else {
//     console.error(
//       'Element #scrollToTopButton, #scrollDownButton, #header, or #footer not found in the DOM.'
//     );
//   }
// });

document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopButton = document.getElementById('scrollToTopButton');
  const scrollDownButton = document.getElementById('scrollDownButton');
  const footer = document.getElementById('footer');
  const header = document.getElementById('header');

  let lastScrollPosition = 0; // Pozycja ostatniego przewijania
  let scrollDirection = 'down'; // Domyślny kierunek
  let hideButtonTimeout;

  if (scrollToTopButton && scrollDownButton && header && footer) {
    scrollToTopButton.style.display = 'none'; // Ukryj przycisk na początku

    // Funkcja do ukrywania przycisku po 10 sekundach braku aktywności
    const startHideButtonTimeout = () => {
      clearTimeout(hideButtonTimeout);
      hideButtonTimeout = setTimeout(() => {
        scrollToTopButton.style.display = 'none';
      }, 10000); // Ukryj po 10 sekundach
    };

    window.addEventListener('scroll', () => {
      const footerRect = footer.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const currentScrollPosition = window.pageYOffset;

      // Określanie kierunku przewijania
      if (currentScrollPosition > lastScrollPosition) {
        scrollDirection = 'down'; // Przewijanie w dół
      } else {
        scrollDirection = 'up'; // Przewijanie w górę
      }
      lastScrollPosition = currentScrollPosition;

      // Sprawdzenie czy pokazujemy przycisk
      if (currentScrollPosition > 100 && footerRect.top > windowHeight) {
        scrollToTopButton.style.display = 'flex'; // Pokaż przycisk
        scrollDownButton.classList.add('hidden'); // Ukryj przycisk w sekcji hero
        startHideButtonTimeout(); // Zresetuj czas do ukrycia
      } else {
        scrollToTopButton.style.display = 'none'; // Ukryj przycisk
        scrollDownButton.classList.remove('hidden'); // Pokaż przycisk w sekcji hero
      }

      // Zmieniamy ikonę przycisku w zależności od kierunku
      const icon = scrollToTopButton.querySelector('svg');
      if (scrollDirection === 'up') {
        icon.style.transform = 'rotate(180deg)'; // Obróć ikonę do góry
      } else {
        icon.style.transform = 'rotate(0deg)'; // Obróć ikonę do dołu
      }
    });

    scrollToTopButton.addEventListener('click', () => {
      clearTimeout(hideButtonTimeout); // Zatrzymujemy licznik ukrycia przycisku

      if (scrollDirection === 'up') {
        // Przewiń do góry
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        // Przewiń do dołu
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      }
    });
  } else {
    console.error(
      'Element #scrollToTopButton, #scrollDownButton, #header, or #footer not found in the DOM.'
    );
  }
});
