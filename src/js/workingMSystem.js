// js/workingMSystem.js

import { methodologySystemData } from './fakeAPI-MSystem.js';
import imagesMethodologySystem from './index-ImagesImport-MSystem.js';

document.addEventListener('DOMContentLoaded', () => {
  const methodologySystemContainer = document.querySelector('.msys-list');

  if (methodologySystemContainer) {
    const methodologySystemItems = methodologySystemData.map(item => {
      const img = imagesMethodologySystem.find(
        image => image.id === item.id
      ).src;

      const listItem = document.createElement('li');
      listItem.className = 'msys-items';

      listItem.innerHTML = `
      <div class="msys-text-item">
        <h2 class="msys-second-heading">${item.title}</h2>
        ${item.text}
      </div>
      <div class="msys-image-link">
        <img class="msys-image" src="${img}" alt="${item.title}" />
      </div>
    `;

      // listItem.innerHTML = `
      //   <div class="msys-text-item">
      //     <h2 class="msys-second-heading">${item.title}</h2>
      //     <p class="msys-text">${item.text}</p>
      //   </div>
      //   <div class="msys-image-link">
      //     <img class="msys-image" src="${img}" alt="${item.title}" />
      //   </div>
      // `;

      return listItem;
    });

    methodologySystemItems.forEach(item =>
      methodologySystemContainer.appendChild(item)
    );
  }
});
