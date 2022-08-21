export class Form {
  rootEl = '';
  ref = {
    inputAddress: '',
    inputImageLink: '',
    inputDescripton: '',
  };

  constructor(root) {
    this.rootEl = document.querySelector(root);
    this.hideForm();
  }

  renderFormToAddNewAppartment = onSubmit => {
    this.rootEl.innerHTML = `
<div class="form__wrap">
  <h3 class="form__title">Додайте новий об'єкт</h3>
  <form class="form__body">
    <label class="form__label">
      <span class="form__text">Адреса</span>
      <input class="form__field" type="text" name="title" placeholder="назва вулиці, № будинку" />
    </label>

    <label class="form__label">
      <span class="form__text invisible">Посилання на фото</span>
      <input class="form__field invisible" type="text" name="image" placeholder="" />
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
    <div class='form__error'>
    <p class='error__text--not-found invisible'>Об'єкт не знайдено. Спробуйте ще</p>
    <p class='error__text--empty-fields invisible'>Заповніть всі поля</p>
    </div>

  </form>
</div>
`;
    this.ref.inputAddress = this.rootEl.querySelector('input[name="title"]');
    this.ref.inputImageLink = this.rootEl.querySelector('input[name="image"]');
    this.ref.inputDescripton = this.rootEl.querySelector(
      'input[name="description"]'
    );

    this.ref.inputAddress.addEventListener('focus', () => {
      this.ref.inputAddress.value = '';
      this.hideErrorSearch();
    });

    this.rootEl
      .querySelector('.form__body')
      .addEventListener('submit', event => {
        event.preventDefault();

        const title = event.currentTarget.elements['title'].value;
        const image = event.currentTarget.elements['image'].value;
        const description = event.currentTarget.elements['description'].value;
        onSubmit({ title, image, description });
      });
  };

  hideForm = () => {
    this.rootEl.classList.add('invisible');
  };

  openForm = () => {
    this.rootEl.classList.remove('invisible');
  };

  hideErrorSearch = () => {
    this.rootEl
      .querySelector('.error__text--not-found')
      .classList.add('invisible');
  };

  showErrorSearch = () => {
    this.rootEl
      .querySelector('.error__text--not-found')
      .classList.remove('invisible');
  };
}
