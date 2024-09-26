// js/scrollToTopButton.js

// document.addEventListener('DOMContentLoaded', function () {
//   const scrollToTopButton = document.getElementById('scrollToTopButton');

//   if (scrollToTopButton) {
//     scrollToTopButton.style.display = 'none';

//     window.addEventListener('scroll', () => {
//       if (window.pageYOffset > 100) {
//         scrollToTopButton.style.display = 'block';
//       } else {
//         scrollToTopButton.style.display = 'none';
//       }
//     });

//     scrollToTopButton.addEventListener('click', () => {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       });
//     });
//   } else {
//     console.error('Element #scrollToTopButton not found in the DOM.');
//   }
// });

document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopButton = document.getElementById('scrollToTopButton');
  const footer = document.getElementById('footer'); // Pobieramy footer

  if (scrollToTopButton && footer) {
    scrollToTopButton.style.display = 'none'; // Początkowo ukryty

    window.addEventListener('scroll', () => {
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Jeśli użytkownik przewinął więcej niż 100px i footer nie jest widoczny
      if (window.pageYOffset > 100 && footerRect.top > windowHeight) {
        scrollToTopButton.style.display = 'block'; // Pokaż przycisk
      } else {
        scrollToTopButton.style.display = 'none'; // Ukryj przycisk
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
      'Element #scrollToTopButton or #footer not found in the DOM.'
    );
  }
});
