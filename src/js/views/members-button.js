import Abstract from "./abstract";

const createMembersButtonTemplate = () => (
  `<div class="team__button-container">
    <button class="js-button-load-more button">Load More</button>
  </div>`
);

export default class MembersButton extends Abstract {
  constructor() {
    super();
    this._buttonClickHandler = this._buttonClickHandler.bind(this);
  }

  getTemplate() {
    return createMembersButtonTemplate();
  }

  setButtonClickHandler(callback) {
    this._callback.buttonClick = callback;
    this.getElement().querySelector(".js-button-load-more").addEventListener("click", this._buttonClickHandler);
  }

  _buttonClickHandler(evt) {
    evt.preventDefault();
    evt.target.classList.add("button_loading");
    evt.target.setAttribute("disabled", "disabled");;
    this._callback.buttonClick();
  }
}
