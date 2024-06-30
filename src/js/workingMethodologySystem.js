// workingMethodologySystem.js

import { methodologySystemData } from './fakeAPI-MethodologySystem.js';
import imagesMethodologySystem from './index-ImagesImport-MethodologySystem.js';

document.addEventListener('DOMContentLoaded', () => {
  const methodologyContainer = document.querySelector('.methodology-list');

  if (methodologyContainer) {
    const methodologyItems = methodologySystemData.map(item => {
      const img = imagesMethodologySystem.find(
        image => image.id === item.id
      ).src;

      const listItem = document.createElement('li');
      listItem.className = 'methodology-item';

      listItem.innerHTML = `
        <div class="methodology-flip-card">
          <div class="methodology-flip-card-inner">
            <div class="methodology-flip-card-front">
              <div class="methodology-link">
                <img class="methodology-image" src="${img}" alt="${item.title}" width="180" height="180" />
              </div>
              <div class="methodology-description">
                <h3 class="methodology-title-front">${item.title}</h3>
              </div>
            </div>
            <div class="methodology-flip-card-back">
              <h3 class="methodology-title">${item.title}</h3>
              <p class="methodology-text">${item.text}</p>
            </div>
          </div>
        </div>
      `;

      return listItem;
    });

    methodologyItems.forEach(item => methodologyContainer.appendChild(item));
  }
});
