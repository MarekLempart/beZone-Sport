// js/contactModal.js

import emailjs from 'emailjs-com';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

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

  // Inicjalizacja EmailJS z Twoim User ID
  emailjs.init('xtkeKbpRdN9dos4sU'); // Upewnij się, że to jest poprawne User ID

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
        'service_g5pmlsi', // Service ID z EmailJS
        'template_i9me02a', // Template ID z EmailJS
        templateParams
      );

      if (response.status === 200) {
        alert('Wiadomość wysłana pomyślnie!');
        form.reset(); // Resetowanie formularza
        modal.classList.add('is-hidden'); // Zamknięcie modala
      } else {
        alert('Wystąpił błąd podczas wysyłania wiadomości.');
      }
    } catch (error) {
      console.error('Błąd przy wysyłaniu emaila:', error);
      alert('Wystąpił błąd podczas wysyłania wiadomości.');
    }
  });

  // document.addEventListener('DOMContentLoaded', () => {
  //   // Inicjalizacja EmailJS z Twoim User ID
  //   emailjs.init('xtkeKbpRdN9dos4sU');
  //   // Dodanie listenera na formularz
  //   const form = document.querySelector('.modal-review-form');
  //   form.addEventListener('submit', async event => {
  //     event.preventDefault();

  //     const name = form.querySelector('#name_id').value;
  //     const email = form.querySelector('#email_id').value;
  //     const phone = form.querySelector('#phone_id').value;
  //     const message = form.querySelector('#message').value;
  //     const subject = document
  //       .querySelector('[data-modal-subject]')
  //       .getAttribute('data-modal-subject');

  //     // Tworzymy dane do wysłania w EmailJS
  //     const templateParams = {
  //       name_id: name,
  //       email_id: email,
  //       phone_id: phone,
  //       message: message,
  //       subject: subject,
  //     };

  //     try {
  //       // Wysyłanie wiadomości za pomocą EmailJS
  //       const response = await emailjs.send(
  //         'service_g5pmlsi', // Service ID
  //         'template_i9me02a', // Template ID
  //         templateParams
  //       );
  //       if (response.status === 200) {
  //         alert('Wiadomość wysłana pomyślnie!');
  //         form.reset(); // Resetowanie formularza
  //         modal.classList.add('is-hidden'); // Zamknięcie modala
  //       } else {
  //         alert('Wystąpił błąd podczas wysyłania wiadomości.');
  //       }
  //     } catch (error) {
  //       console.error('Błąd przy wysyłaniu emaila:', error);
  //       alert('Wystąpił błąd podczas wysyłania wiadomości.');
  //     }
  //   });
  // });
});
