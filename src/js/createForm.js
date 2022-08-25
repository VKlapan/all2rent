export class Form {
  rootEl = '';
  ref = {
    inputLat: '',
    inputLng: '',
    inputAddress: '',
    inputImageLink: '',
    inputDescripton: '',
    buttonSearch: '',
    stepAdd: [],
  };

  constructor(root) {
    this.rootEl = document.querySelector(root);
    this.hideForm();
  }

  renderFormToAddNewApartment = (onSubmitSearch, onSubmitAdd) => {
    this.rootEl.innerHTML = `
<div class="form__wrap">
  <h3 class="form__title">Додайте новий об'єкт</h3>
  <form class="form__body">
  <input class="invisible" type="text" name="lat"></input>
    <input class="invisible" type="text" name="lng"></input>
    <label class="form__label">
      <span class="form__text">Адреса</span>
      <input class="form__field" type="text" name="title" placeholder="назва вулиці, № будинку" />
    </label>

    <label class="form__label">
      <span class="form__text invisible" option="stepAdd">Посилання на фото</span>
      <input class="form__field invisible" type="text" name="image" option="stepAdd" placeholder="посилання на фото" />
    </label>

    <label class="form__label ">
      <span class="form__text invisible" option="stepAdd">Опис</span>
      <textarea
        class="form__field form__field--textarea invisible"
        name="description"
        option="stepAdd"
        placeholder="опис об'єкту"
        cols="30"
        rows="10"
      ></textarea>
    </label>
    <button class="form__button form__button--search" option='step1'>Знайти адресу</button>
    <button class="form__button form__button--save invisible" type="submit" option='stepAdd'>Додати</button>
    <div class='form__error'>
    <p class='error__text--not-found invisible'>Об'єкт не знайдено. Спробуйте ще</p>
    <p class='error__text--empty-fields invisible'>Заповніть всі поля</p>
    </div>

  </form>
</div>
`;
    this.ref.inputLat = this.rootEl.querySelector('input[name="lat"]');
    this.ref.inputLng = this.rootEl.querySelector('input[name="lng"]');
    this.ref.inputAddress = this.rootEl.querySelector('input[name="title"]');
    this.ref.inputImageLink = this.rootEl.querySelector('input[name="image"]');
    this.ref.inputDescripton = this.rootEl.querySelector(
      '[name="description"]'
    );
    this.ref.buttonSearch = this.rootEl.querySelector('.form__button--search');
    this.ref.stepAdd = this.rootEl.querySelectorAll('[option="stepAdd"]');

    this.ref.inputAddress.addEventListener('focus', () => {
      this.ref.inputAddress.value = '';
      this.hideErrorSearch();
    });

    this.rootEl
      .querySelector('.form__button--search')
      .addEventListener('click', event => {
        event.preventDefault();

        const title = this.ref.inputAddress.value;
        onSubmitSearch(title);
      });

    this.rootEl
      .querySelector('.form__body')
      .addEventListener('submit', event => {
        event.preventDefault();
        const lat = Number(event.currentTarget.elements['lat'].value);
        const lng = Number(event.currentTarget.elements['lng'].value);

        const title = event.currentTarget.elements['title'].value;
        const image = event.currentTarget.elements['image'].value;
        const description = event.currentTarget.elements['description'].value;
        onSubmitAdd({ lat, lng, title, image, description });
      });
  };

  saveFoundedCoordinates = newPointCoordinates => {
    console.log(newPointCoordinates.lat);
    console.log(newPointCoordinates.lng);

    this.ref.inputLat.value = newPointCoordinates.lat;
    this.ref.inputLng.value = newPointCoordinates.lng;

    console.log(this.ref.inputLat.value);
    console.log(this.ref.inputLng.value);
  };

  openFormAfterSearch = () => {
    this.ref.buttonSearch.classList.add('invisible');
    this.ref.stepAdd.forEach(item => item.classList.remove('invisible'));
  };

  hideFormAfterSearch = () => {
    this.ref.inputAddress.value = '';
    this.ref.inputImageLink.value = '';
    this.ref.inputDescripton.value = '';
    this.ref.buttonSearch.classList.remove('invisible');
    this.ref.stepAdd.forEach(item => item.classList.add('invisible'));
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
