// js/scrollToTopButton.js

// document.addEventListener('DOMContentLoaded', function () {
//   const scrollToTopButton = document.getElementById('scrollToTopButton');
//   const footer = document.getElementById('footer'); // Pobieramy footer

//   if (scrollToTopButton && footer) {
//     scrollToTopButton.style.display = 'none'; // Początkowo ukryty

//     window.addEventListener('scroll', () => {
//       const footerRect = footer.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Jeśli użytkownik przewinął więcej niż 100px i footer nie jest widoczny
//       if (window.pageYOffset > 100 && footerRect.top > windowHeight) {
//         scrollToTopButton.style.display = 'block'; // Pokaż przycisk
//       } else {
//         scrollToTopButton.style.display = 'none'; // Ukryj przycisk
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
//       'Element #scrollToTopButton or #footer not found in the DOM.'
//     );
//   }
// });

document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopButton = document.getElementById('scrollToTopButton');
  const scrollDownButton = document.getElementById('scrollDownButton'); // Dodany przycisk z sekcji hero
  const header = document.getElementById('header'); // Header
  const footer = document.getElementById('footer'); // Footer

  if (scrollToTopButton && scrollDownButton && header && footer) {
    scrollToTopButton.style.display = 'none'; // Ukryj przycisk na początku

    window.addEventListener('scroll', () => {
      const footerRect = footer.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Jeśli użytkownik przewinął więcej niż 100px i footer oraz header nie są widoczne
      if (
        window.pageYOffset > 100 &&
        footerRect.top > windowHeight &&
        headerRect.bottom < 0
      ) {
        scrollToTopButton.style.display = 'block'; // Pokaż przycisk scroll-to-top
        scrollDownButton.classList.add('hidden'); // Ukryj przycisk w sekcji hero
      } else {
        scrollToTopButton.style.display = 'none'; // Ukryj przycisk scroll-to-top
        scrollDownButton.classList.remove('hidden'); // Pokaż przycisk w sekcji hero
      }
    });

    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  } else {
    console.error(
      'Element #scrollToTopButton, #scrollDownButton, #header, or #footer not found in the DOM.'
    );
  }
});
