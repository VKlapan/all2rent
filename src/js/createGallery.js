export class Gallery {
  itemsGalleryEl = '';

  constructor(root) {
    this.itemsGalleryEl = document.querySelector(root);
  }

  renderItemsGallery = appartments => {
    return appartments
      .map(appart => {
        return `
    <li class="item" data-id="${appart.id}">
    <img class="item--img" src="${appart.image}" alt="" />
    <div class="item--details">
      <h3 class="item--title">${appart.title}</h3>
      <p class="item--description">${appart.description}</p>
    </div>
  </li>
    `;
      })
      .join('');
  };

  showAppartments = appartments => {
    console.log(appartments);
    this.itemsGalleryEl.innerHTML = this.renderItemsGallery(appartments);
  };
}
