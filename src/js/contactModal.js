// contactModal.js

document.addEventListener('DOMContentLoaded', () => {
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
      } else if (button.hasAttribute('data-modal-buy2-open')) {
        modalHeading.textContent = 'tu możesz ';
        modalAccent.textContent = 'umówić wizytę';
      } else {
        modalHeading.textContent = 'tu możesz napisać ';
        modalAccent.textContent = 'opinię o mojej pracy';
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
});
