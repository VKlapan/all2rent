export class Gallery {
  itemsGalleryEl = '';

  constructor(root) {
    this.itemsGalleryEl = document.querySelector(root);
  }

  renderItemsGallery = apartments => {
    return apartments
      .map(apart => {
        return `
    <li class="item" data-id="${apart.id}">
    <img class="item__img" src="${apart.image}" alt="" />
    <div class="item__details">
      <h3 class="item__title">${apart.title}</h3>
      <p class="item__description">${apart.description}</p>
    </div>
  </li>
    `;
      })
      .join('');
  };

  showChoosenApartment(id) {
    document.querySelector(`[data-id='${id}']`).scrollIntoView(true);
  }

  showApartments = apartments => {
    this.itemsGalleryEl.innerHTML = this.renderItemsGallery(apartments);
  };

  hideGallery = () => {
    this.itemsGalleryEl.classList.add('invisible');
  };

  openGallery = () => {
    this.itemsGalleryEl.classList.remove('invisible');
  };
}
