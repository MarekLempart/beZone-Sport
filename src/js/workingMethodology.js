// workingMethodology.js

import { methodologyData } from './fakeAPI-Methodology.js';
import imagesMethodology from './index-ImagesImport-Methodology.js';

document.addEventListener('DOMContentLoaded', () => {
  const methodologyContainer = document.querySelector('.methodology-list');

  if (methodologyContainer) {
    const methodologyItems = methodologyData.map(item => {
      const img = imagesMethodology.find(image => image.id === item.id).src;

      const listItem = document.createElement('li');
      listItem.className = 'methodology-item';

      listItem.innerHTML = `
        <div class="methodology-flip-card">
          <div class="methodology-flip-card-inner">
            <div class="methodology-flip-card-front">
              <div class="methodology-link">
                <img class="methodology-image" src="${img}" alt="${item.title}" width="206" height="160" />
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
