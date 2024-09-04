// js/scrollToTopButton.js

document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopButton = document.getElementById('scrollToTopButton');

  if (scrollToTopButton) {
    scrollToTopButton.style.display = 'none';

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    });

    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  } else {
    console.error('Element #scrollToTopButton not found in the DOM.');
  }
});
