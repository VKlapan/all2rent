export class Appartment {
  id = null;
  title = '';
  image = '';
  description = '';

  constructor(lastId, title) {
    this.id = lastId + 1;
    this.title = title;
  }

  set image(image) {
    this.image = image;
  }
  set description(description) {
    this.description = description;
  }
}
