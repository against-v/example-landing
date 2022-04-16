import Abstract from "./abstract";
import {Filters} from "@/js/constants";

const createMembersFilterTemplate = () => (
  `<div class="team__filter filter">
    ${Filters.map((item, index) => `<button class="js-button-filter filter__button filter-button" value=${item.name}>${item.label}</button>`).join("")}
  </div>`
);

export default class MembersFilter extends Abstract {
  constructor() {
    super();
    this._buttonClickHandler = this._buttonClickHandler.bind(this);
    this._buttons = [];
  }

  init() {
    this._buttons = this.getElement().querySelectorAll(".js-button-filter");
    this._setActiveButton(this._buttons[0]);
  }

  getTemplate() {
    return createMembersFilterTemplate();
  }

  setButtonClickHandler(callback) {
    this._callback.buttonClick = callback;
    this._buttons.forEach(button => button.addEventListener("click", this._buttonClickHandler));
  }

  _buttonClickHandler(evt) {
    evt.preventDefault();
    this._buttons.forEach(button => {
      button.classList.remove("filter-button_active");
      button.removeAttribute("disabled");
    });
    this._setActiveButton(evt.target);
    this._callback.buttonClick(evt.target.value);
  }

  _setActiveButton(button) {
    button.classList.add("filter-button_active");
    button.setAttribute("disabled", "disabled");
  }
}
