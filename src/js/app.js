export class App {
  root = '';
  rootMap = '';
  rootGallery = '';
  rootForm = '';

  constructor(root) {
    this.root = root;
  }

  initApp = () => {
    const markupMap = `
        <header class="container">
        <div class="header__wrap">
            <div class="header__logo">
                <a class="header__link" href="https://www.gup.ua/">
                <img
                    class="header__img"
                    src="https://www.gup.ua/images/logo-ua-razom.svg"
                    alt="Лого порталу GUP: сервіс прокату і оренди"
                /></a>
            </div>
            <div class="header__menu">
                <button type="button" class="header__btn" id="add-bulletin">
                <span>Здати в оренду</span>
                </button>

                <div class="header__login">
                <a class="login__link">
                <span class="login__text">Увійти</span>
                </a>
                </div>
            </div>
        </div>
        </header>

        <div class="main container">
            <div class="main__map">
                <div id="map"></div>
            </div>
            <div class="main__gallery">
                <div class="form__block"></div>
                <ul class="item__list"></ul>
            </div>
        </div>

        `;

    document.querySelector(this.root).innerHTML = markupMap;
  };

  getRootMap() {
    return document.getElementById('map');
  }

  getButtonToAddNewApartment() {
    return document.querySelector('.header__btn');
  }
}
