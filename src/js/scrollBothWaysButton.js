// js/scrollToTopButton.js

// document.addEventListener('DOMContentLoaded', function () {
//   const scrollToTopButton = document.getElementById('scrollToTopButton');
//   const scrollDownButton = document.getElementById('scrollDownButton');
//   const footer = document.getElementById('footer');
//   const header = document.getElementById('header');

//   let lastScrollPosition = 0; // Pozycja ostatniego przewijania
//   let scrollDirection = 'down'; // Domyślny kierunek
//   let hideButtonTimeout;

//   if (scrollToTopButton && scrollDownButton && header && footer) {
//     scrollToTopButton.style.display = 'none'; // Ukryj przycisk na początku

//     // Funkcja do ukrywania przycisku po 3 sekundach braku aktywności
//     const startHideButtonTimeout = () => {
//       clearTimeout(hideButtonTimeout);
//       hideButtonTimeout = setTimeout(() => {
//         scrollToTopButton.style.display = 'none';
//       }, 3000); // Ukryj po 3 sekundach
//     };

//     window.addEventListener('scroll', () => {
//       const footerRect = footer.getBoundingClientRect();
//       const headerRect = header.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
//       const currentScrollPosition = window.pageYOffset;

//       // Określanie kierunku przewijania
//       if (currentScrollPosition > lastScrollPosition) {
//         scrollDirection = 'down'; // Przewijanie w dół
//       } else {
//         scrollDirection = 'up'; // Przewijanie w górę
//       }
//       lastScrollPosition = currentScrollPosition;

//       // Sprawdzenie czy pokazujemy przycisk
//       if (currentScrollPosition > 100 && footerRect.top > windowHeight) {
//         scrollToTopButton.style.display = 'flex'; // Pokaż przycisk
//         scrollDownButton.classList.add('hidden'); // Ukryj przycisk w sekcji hero
//         startHideButtonTimeout(); // Zresetuj czas do ukrycia
//       } else {
//         scrollToTopButton.style.display = 'none'; // Ukryj przycisk
//         scrollDownButton.classList.remove('hidden'); // Pokaż przycisk w sekcji hero
//       }

//       // Zmieniamy ikonę przycisku w zależności od kierunku
//       const icon = scrollToTopButton.querySelector('svg');
//       if (scrollDirection === 'up') {
//         icon.style.transform = 'rotate(180deg)'; // Obróć ikonę do góry
//       } else {
//         icon.style.transform = 'rotate(0deg)'; // Obróć ikonę do dołu
//       }
//     });

//     scrollToTopButton.addEventListener('click', () => {
//       clearTimeout(hideButtonTimeout); // Zatrzymujemy licznik ukrycia przycisku

//       if (scrollDirection === 'up') {
//         // Przewiń do góry
//         window.scrollTo({
//           top: 0,
//           behavior: 'smooth',
//         });
//       } else {
//         // Przewiń do dołu
//         window.scrollTo({
//           top: document.body.scrollHeight,
//           behavior: 'smooth',
//         });
//       }
//     });
//   } else {
//     console.error(
//       'Element #scrollToTopButton, #scrollDownButton, #header, or #footer not found in the DOM.'
//     );
//   }
// });

// js/scrollBothWaysButton.js

document.addEventListener('DOMContentLoaded', function () {
  const scrollBothWaysButton = document.getElementById('scrollBothWaysButton'); // Przycisk przewijania
  const scrollDownButton = document.getElementById('scrollDownButton'); // Przycisk w sekcji hero
  const header = document.getElementById('header'); // Header
  const footer = document.getElementById('footer'); // Footer
  let scrollTimeout;
  let lastScrollTop = window.pageYOffset; // Zapamiętujemy pozycję przewinięcia

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
      const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';

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
      if (window.pageYOffset > window.innerHeight) {
        // Przewiń do góry, gdy użytkownik jest niżej na stronie
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        // Przewiń w dół, gdy użytkownik jest blisko góry strony
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
