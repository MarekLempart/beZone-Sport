// js/lazyloaded.js

document.addEventListener('DOMContentLoaded', function () {
  const lazyImages = document.querySelectorAll('img.lazyloaded');

  const loadImage = image => {
    const src = image.dataset.src;
    if (!src) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      image.src = src; // Ustawienie src na pełne zdjęcie
      image.classList.remove('lazyloaded'); // Usunięcie klasy lazyloaded
    };
    img.onerror = () => {
      console.error(`Error loading image: ${src}`);
    };
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        observer.unobserve(entry.target); // Zatrzymanie obserwacji po załadowaniu
      }
    });
  });

  lazyImages.forEach(image => {
    image.classList.add('lazyloaded'); // Dodanie klasy lazyloaded przed załadowaniem
    observer.observe(image); // Obserwowanie obrazu
  });
});
