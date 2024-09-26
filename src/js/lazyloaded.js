// js/lazyloaded.js

import 'lazysizes';
import 'lazysizes/plugins/bgset/ls.bgset'; // Import pluginu bgset

// Poniewąż Parcel ma problem ze ścieżkami w HTML, wymaga zaimportowania obrazów i jest zrobione to dynamicznie
import image6 from '../images/aboutUs-img_12.webp';
import image4 from '../images/forWhom-img_05.webp';
import backgroundImage from '../images/forWhom_background_04.webp';
import image5 from '../images/howWork-img_07.webp';
import image1 from '../images/preliminary-img_01.webp';
import image2 from '../images/timeToChange01-img_03.webp';
import image3 from '../images/timeToChange02-img_04.webp';

// Importuj obrazy tła
import desktopBg from '../images/methodology-footer_background_desktop_08.webp';
import mobileBg from '../images/methodology-footer_background_mobile_08.webp';
import tabletBg from '../images/methodology-footer_background_tablet_08.webp';

// Tworzymy obiekt z kluczami i odpowiadającymi im obrazami
const imagesObject = {
  preliminary: image1,
  timeToChange01: image2,
  timeToChange02: image3,
  forWhom: image4,
  howWork: image5,
  aboutUs: image6,
};

// Funkcja wykonująca operacje po załadowaniu DOM
document.addEventListener('DOMContentLoaded', function () {
  // Pobieramy wszystkie obrazy lazyload
  const lazyImages = document.querySelectorAll('.lazyload');

  // Pętla przechodząca po każdym obrazie
  lazyImages.forEach(img => {
    // Sprawdzamy, czy atrybut 'data-src' istnieje
    const dataSrc = img.getAttribute('data-src');

    if (dataSrc) {
      // Pobieramy nazwę pliku z atrybutu 'data-src', zaczynając od 9 znaku (omijając './images/')
      const partialString = dataSrc.slice(9);

      // Wyciągamy klucz (część nazwy pliku przed '-img')
      const key = partialString.substring(0, partialString.indexOf('-img'));

      // Jeśli klucz istnieje w obiekcie imagesObject, ustawiamy nową wartość dla 'data-src'
      if (imagesObject[key]) {
        img.setAttribute('data-src', imagesObject[key]);
      }
    }
  });
});

// document.addEventListener('DOMContentLoaded', function () {
//   // Pobieramy wszystkie obrazy lazyload i dynamicznie ustawiamy ścieżki do plików
//   const lazyImages = document.querySelectorAll('.lazyload');

//   // Jeśli nie masz problemów z Parcel, to te linie nie są potrzebne.
//   lazyImages.forEach(img => {
//     if (img.getAttribute('data-src') === './images/preliminary-img_01.webp') {
//       img.setAttribute('data-src', image1);
//     } else if (
//       img.getAttribute('data-src') === './images/timeToChange-img_03.webp'
//     ) {
//       img.setAttribute('data-src', image2);
//     } else if (
//       img.getAttribute('data-src') === './images/timeToChange-img_04.webp'
//     ) {
//       img.setAttribute('data-src', image3);
//     } else if (
//       img.getAttribute('data-src') === './images/forWhom-img_05.webp'
//     ) {
//       img.setAttribute('data-src', image4);
//     } else if (
//       img.getAttribute('data-src') === './images/howWork-img_07.webp'
//     ) {
//       img.setAttribute('data-src', image5);
//     } else if (
//       img.getAttribute('data-src') === './images/aboutUs-img_12.webp'
//     ) {
//       img.setAttribute('data-src', image6);
//     }
//   });
// });

// Ustawiamy tło dla sekcji metodologii w zależności od rozmiaru okna
const methodologyBgContainer = document.querySelector(
  '.methodology-footer-background'
);
if (window.innerWidth < 768) {
  methodologyBgContainer.setAttribute('data-bgset', mobileBg);
} else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
  methodologyBgContainer.setAttribute('data-bgset', tabletBg);
} else {
  methodologyBgContainer.setAttribute('data-bgset', desktopBg);
}

// Ustawiamy tło dla innej sekcji
const bgContainer = document.querySelector('.forWhom-third-container');
bgContainer.setAttribute('data-bgset', backgroundImage);

// Dodaj lazyload dla tła
lazySizes.init();
