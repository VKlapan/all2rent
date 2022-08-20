export class Form {
  rootEl = '';

  constructor(root) {
    this.rootEl = document.querySelector(root);
  }

  renderFormToAddNewAppartment = onSubmit => {
    console.log(this.rootEl);

    this.rootEl.innerHTML = `
<div class="form__wrap">
  <h3 class="form__title">Додайте новий об'єкт</h3>
  <form class="form__body">
    <label class="form__label">
      <span class="form__text">Адреса</span>
      <input class="form__field" type="text" name="title" placeholder=" " />
    </label>

    <label class="form__label">
      <span class="form__text invisible">Посилання на фото</span>
      <input class="form__field invisible" type="text" name="image" placeholder=" " />
    </label>

    <label class="form__label ">
      <span class="form__text invisible">Опис</span>
      <textarea
        class="form__field form__field--textarea invisible"
        name="description"
        placeholder=" "
        cols="30"
        rows="10"
      ></textarea>
    </label>
    <button class="form__button " type="submit">Знайти адресу</button>
    <button class="form__button--save invisible" type="submit">Додати</button>

  </form>
</div>
`;

    this.rootEl
      .querySelector('.form__body')
      .addEventListener('submit', event => {
        event.preventDefault();

        const title = event.currentTarget.elements['title'].value;
        const image = event.currentTarget.elements['image'].value;
        const description = event.currentTarget.elements['description'].value;

        console.log({ title, image, description });
        onSubmit({ title, image, description });
      });
  };
}
