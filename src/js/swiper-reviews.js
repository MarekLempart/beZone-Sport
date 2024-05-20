// swiper-reviews.js

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { reviews } from './fakeApi';

// Funkcja tworząca kartę opinii
function createReviewCard({ name, review, photo, photoAlt }) {
  const li = document.createElement('li');
  li.className = 'reviews-li swiper-slide';

  const img = document.createElement('img');
  img.className = 'review-photo';
  img.src = photo;
  img.alt = photoAlt;
  img.width = 80;
  img.height = 80;

  const h3 = document.createElement('h3');
  h3.className = 'review-heading';
  h3.textContent = name;

  const p = document.createElement('p');
  p.className = 'review-p';
  p.textContent = review;

  li.appendChild(img);
  li.appendChild(h3);
  li.appendChild(p);

  return li;
}

// Funkcja ładująca opinie i dodająca je do listy
function loadReviews() {
  const reviewsList = document.getElementById('reviews-list');

  // Użycie metody .map do stworzenia elementów <li> dla każdej opinii
  const reviewCards = reviews.map(review => createReviewCard(review));

  // Dodanie każdej karty opinii do listy
  reviewCards.forEach(card => reviewsList.appendChild(card));
}

// Wywołanie funkcji ładującej opinie
loadReviews();

// Inicjalizacja Swiper
const swiper = new Swiper('.reviews-js-slider', {
  slidesPerView: 3,
  spaceBetween: 28,
  pagination: {
    el: '.reviews-js-pagination',
    clickable: true,
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
