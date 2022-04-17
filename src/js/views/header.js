import Abstract from "./abstract";
import logoImage from '@/images/logo.png';

const LINKS = [
  {
    url: '#',
    label: 'About us'
  },
  {
    url: '#',
    label: 'Gallery'
  },
  {
    url: '#',
    label: 'Crew'
  },
  {
    url: '#',
    label: 'Kontakt'
  },
];

const createHeaderTemplate = () => (
  `<header class="header">
    <button class="header__burger burger js-burger">
      <div></div>
    </button>
    <nav class="header__nav nav">
      ${LINKS.map(item => `<a class="nav__item" href="${item.url}">${item.label}</a>`).join("")}
    </nav>
    <div class="header__logo">
      <img src="${logoImage}" alt="Logo" class="logo">
    </div>
  </header>`
);

export default class Header extends Abstract {
  constructor() {
    super();
    this._buttonClickHandler = this._buttonClickHandler.bind(this);
    this._button = null;
  }

  init() {
    this._button = this.getElement().querySelector(".js-burger");
    this._setButtonClickHandler();
  }

  getTemplate() {
    return createHeaderTemplate();
  }

  _buttonClickHandler(evt) {
    evt.preventDefault();
    this._button.classList.toggle("burger_active");
  }

  _setButtonClickHandler() {
    this._button.addEventListener("click", this._buttonClickHandler);
  }
}
