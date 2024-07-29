// contactModal.js

import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#review-phone');
  intlTelInput(input);

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
        modal.setAttribute('data-modal-subject', 'Kontakt');
      } else if (button.hasAttribute('data-modal-buy2-open')) {
        modalHeading.textContent = 'tu możesz ';
        modalAccent.textContent = 'umówić wizytę';
        modal.setAttribute('data-modal-subject', 'Zamawiam trening');
      } else {
        modalHeading.textContent = 'tu możesz napisać ';
        modalAccent.textContent = 'opinię o mojej pracy';
        modal.setAttribute('data-modal-subject', 'Moja opinia');
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

  // Handle form submission
  const form = document.querySelector('.modal-review-form');
  form.addEventListener('submit', async event => {
    event.preventDefault();

    const name = form.querySelector('#review-name').value;
    const email = form.querySelector('#review-email').value;
    const phone = form.querySelector('#review-phone').value;
    const message = form.querySelector('#opinion').value;
    const subject = modal.getAttribute('data-modal-subject');

    const response = await fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        subject,
      }),
    });

    if (response.ok) {
      alert('Wiadomość wysłana!');
      form.reset();
      closeModal();
    } else {
      alert('Wystąpił błąd podczas wysyłania wiadomości.');
    }
  });
});
