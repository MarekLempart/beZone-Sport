// swiper-reviews.js

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { reviews } from './fakeApi-review';

// Funkcja zamieniająca ":)" na emoji
const replaceSmileysWithEmojis = text => {
  return text.replace(/:\)/g, '😊');
};

// Funkcja tworząca kartę opinii
const createReviewCard = ({ name, review, photo, photoAlt }) => {
  const li = document.createElement('li');
  li.className = 'reviews-li swiper-slide';

  const img = document.createElement('img');
  img.className = 'review-photo';
  img.src = photo;
  img.alt = photoAlt;
  img.width = 90;
  img.height = 90;

  const h3 = document.createElement('h3');
  h3.className = 'review-heading';
  h3.textContent = name;

  const p = document.createElement('p');
  p.className = 'review-p';
  p.textContent = replaceSmileysWithEmojis(review);

  li.appendChild(img);
  li.appendChild(h3);
  li.appendChild(p);

  return li;
};

// Funkcja ładująca opinie i dodająca je do listy
const loadReviews = () => {
  const reviewsList = document.getElementById('reviews-list');

  // Użycie metody .map do stworzenia elementów <li> dla każdej opinii
  const reviewCards = reviews.map(review => createReviewCard(review));

  // Dodanie każdej karty opinii do listy
  reviewCards.forEach(card => reviewsList.appendChild(card));
};

// Wywołanie funkcji ładującej opinie
loadReviews();

// Funkcja dla inicjalizacji Swiper
const initializeSwiper = () => {
  const swiper = new Swiper('.reviews-js-slider', {
    slidesPerView: 7,
    spaceBetween: 28,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
  });
};

// Wywołanie funkcji inicjalizującej Swiper
initializeSwiper();
