export class Form {
  rootEl = '';
  ref = {
    inputAddress: '',
    inputImageLink: '',
    inputDescripton: '',
    stepAdd: [],
  };

  constructor(root) {
    this.rootEl = document.querySelector(root);
    this.hideForm();
  }

  renderFormToAddNewAppartment = (onSubmitSearch, onSubmitAdd) => {
    this.rootEl.innerHTML = `
<div class="form__wrap">
  <h3 class="form__title">Додайте новий об'єкт</h3>
  <form class="form__body">
    <label class="form__label">
      <span class="form__text">Адреса</span>
      <input class="form__field" type="text" name="title" placeholder="назва вулиці, № будинку" />
    </label>

    <label class="form__label">
      <span class="form__text invisible" option="stepAdd">Посилання на фото</span>
      <input class="form__field invisible" type="text" name="image" option="stepAdd" placeholder="" />
    </label>

    <label class="form__label ">
      <span class="form__text invisible" option="stepAdd">Опис</span>
      <textarea
        class="form__field form__field--textarea invisible"
        name="description"
        option="stepAdd"
        placeholder=" "
        cols="30"
        rows="10"
      ></textarea>
    </label>
    <button class="form__button" type="submit">Знайти адресу</button>
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
    this.ref.stepAdd = this.rootEl.querySelectorAll('[option="stepAdd"]');

    this.ref.inputAddress.addEventListener('focus', () => {
      this.ref.inputAddress.value = '';
      this.hideErrorSearch();
    });

    this.rootEl
      .querySelector('.form__button')
      .addEventListener('click', event => {
        event.preventDefault();

        const title = this.ref.inputAddress.value;
        onSubmitSearch(title);
      });

    this.rootEl
      .querySelector('.form__body')
      .addEventListener('submit', event => {
        event.preventDefault();

        const title = event.currentTarget.elements['title'].value;
        const image = event.currentTarget.elements['image'].value;
        const description = event.currentTarget.elements['description'].value;
        onSubmitAdd({ title, image, description });
      });
  };

  openFormAfterSearch = () => {
    console.log(this.ref.stepAdd);
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
