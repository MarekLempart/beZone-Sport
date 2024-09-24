// js/lazyloaded.js

import 'lazysizes';
import 'lazysizes/plugins/bgset/ls.bgset'; // Import pluginu bgset

// Poniewąż Parcel ma problem ze ścieżkami w HTML, wymaga zaimportowania obrazów i jest zrobione to dynamicznie
import backgroundImage from '../images/forWhom_background_04.webp';
import image4 from '../images/forWhom_firstPhoto_05.webp';
import image5 from '../images/howWork_07.webp';
import image6 from '../images/myPhoto_tablet.webp';
import image1 from '../images/preliminary-first-container_01.webp';
import image2 from '../images/timeToChange1-img_03.webp';
import image3 from '../images/timeToChange2-img_04.webp';

// Importuj obrazy tła
import desktopBg from '../images/methodology-footer_background_desktop_08.webp';
import mobileBg from '../images/methodology-footer_background_mobile_08.webp';
import tabletBg from '../images/methodology-footer_background_tablet_08.webp';

document.addEventListener('DOMContentLoaded', function () {
  // Pobieramy wszystkie obrazy lazyload i dynamicznie ustawiamy ścieżki do plików
  const lazyImages = document.querySelectorAll('.lazyload');

  const imagesObject = {
    preliminary: image1,
    timeToChange1: image2,
    timeToChange2: image3,
    forWhom: image4,
    howWork: image5,
    myPhoto: image6,
  };

  lazyImages.forEach(img => {
    const partialString = img.getAttribute('data-src').slice(9);
    const key = partialString.substring(0, partialString.indexOf('-'));
    img.setAttribute('data-src', imagesObject[key]);

    // lazyImages.forEach(img => {
    //   switch(img.getAttribute('data-src')) {
    //     case './images/preliminary-first-container_01.webp':
    //       img.setAttribute('data-src', image1);
    //       break;
    //     case './images/timeToChange-img_03.webp':
    //       img.setAttribute('data-src', image2);
    //       break;
    //     case './images/timeToChange-img_04.webp':
    //       img.setAttribute('data-src', image3);
    //       break;
    //     case './images/forWhom_firstPhoto_05.webp':
    //       img.setAttribute('data-src', image4);
    //       break;
    //     case './images/howWork_07.webp':
    //       img.setAttribute('data-src', image5);
    //       break;
    //     case './images/myPhoto_tablet.webp':
    //       img.setAttribute('data-src', image6);
    //       break;
    //     default:
    //       break;
    //   }

    // Jeśli nie masz problemów z Parcel, to te linie nie są potrzebne.
    // if (
    //   img.getAttribute('data-src') ===
    //   './images/preliminary-first-container_01.webp'
    // ) {
    //   img.setAttribute('data-src', image1);
    // } else if (
    //   img.getAttribute('data-src') === './images/timeToChange-img_03.webp'
    // ) {
    //   img.setAttribute('data-src', image2);
    // } else if (
    //   img.getAttribute('data-src') === './images/timeToChange-img_04.webp'
    // ) {
    //   img.setAttribute('data-src', image3);
    // } else if (
    //   img.getAttribute('data-src') === './images/forWhom_firstPhoto_05.webp'
    // ) {
    //   img.setAttribute('data-src', image4);
    // } else if (img.getAttribute('data-src') === './images/howWork_07.webp') {
    //   img.setAttribute('data-src', image5);
    // } else if (
    //   img.getAttribute('data-src') === './images/myPhoto_tablet.webp'
    // ) {
    //   img.setAttribute('data-src', image6);
    // }
  });

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
});
