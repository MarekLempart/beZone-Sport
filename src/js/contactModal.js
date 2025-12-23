// js/contactModal.js

import emailjs from 'emailjs-com';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import Notiflix from 'notiflix';

const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;

console.log('EmailJS Config:', {
  Service: SERVICE_ID,
  Template: TEMPLATE_ID,
  KeyLoaded: !!PUBLIC_KEY,
});

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#phone_id');

  intlTelInput(input, {
    initialCountry: 'pl', // Domyślnie ustawiamy Polskę
    preferredCountries: ['pl', 'us', 'gb', 'de'], // Lista preferowanych krajów
    utilsScript:
      'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js', // Skrypt pomocniczy do formatowania
  });

  const openReviewBtns = document.querySelectorAll(
    '[data-modal-review-open], [data-modal-buy1-open], [data-modal-buy2-open]'
  );
  const closeReviewBtn = document.querySelector('[data-modal-review-close]');
  const modal = document.querySelector('[data-modal-review]');
  const modalHeading = modal.querySelector('.modal-review-heading');
  const modalAccent = document.createElement('span');
  modalAccent.classList.add('modal-review-accent');

  openReviewBtns.forEach(button => {
    button.addEventListener('click', event => {
      if (button.hasAttribute('data-modal-buy1-open')) {
        modalHeading.textContent = 'tu możesz napisać ';
        modalAccent.textContent = 'coś do mnie';
        modal.setAttribute('data-modal-subject', 'Zapytanie od klienta');
      } else if (button.hasAttribute('data-modal-buy2-open')) {
        modalHeading.textContent = 'tu możesz ';
        modalAccent.textContent = 'umówić wizytę';
        modal.setAttribute(
          'data-modal-subject',
          'Prośba o umówienie terminu treningu'
        );
      } else {
        modalHeading.textContent = 'tu możesz napisać ';
        modalAccent.textContent = 'opinię o mojej pracy';
        modal.setAttribute('data-modal-subject', 'Opinia na temat Bezone');
      }

      modalHeading.appendChild(modalAccent);
      modal.classList.remove('is-hidden');
    });
  });

  const closeModal = () => {
    modal.classList.add('is-hidden');
  };

  closeReviewBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !modal.classList.contains('is-hidden')) {
      closeModal();
    }
  });

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      closeModal();
    }
  });

  if (PUBLIC_KEY) {
    emailjs.init(PUBLIC_KEY);
  } else {
    console.error('Brak klucza publicznego EmailJS! Sprawdź plik .env.');
  }

  // Dodanie listenera na formularz
  const form = document.querySelector('.modal-review-form');
  form.addEventListener('submit', async event => {
    event.preventDefault();

    const name = form.querySelector('#name_id').value;
    const email = form.querySelector('#email_id').value;
    const phone = form.querySelector('#phone_id').value;
    const message = form.querySelector('#message').value;
    const subject = modal.getAttribute('data-modal-subject'); // Pobieranie tematu z modala

    // Dane do wysłania w EmailJS
    const templateParams = {
      name_id: name,
      email_id: email,
      phone_id: phone,
      message: message,
      subject: subject,
    };

    try {
      // Wysyłanie wiadomości za pomocą EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (response.status === 200) {
        Notiflix.Notify.success('Wiadomość wysłana pomyślnie!');
        form.reset(); // Resetowanie formularza
        modal.classList.add('is-hidden'); // Zamknięcie modala
      } else {
        Notiflix.Notify.failure('Wystąpił błąd podczas wysyłania wiadomości.');
      }
    } catch (error) {
      console.error('Błąd przy wysyłaniu emaila:', error);
      Notiflix.Notify.failure('Wystąpił błąd podczas wysyłania wiadomości.');
    }
  });
});
