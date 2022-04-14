import Abstract from "./abstract";

const createHeaderTemplate = () => `<header>header</header>`;

export default class Header extends Abstract {
  getTemplate() {
    return createHeaderTemplate();
  }
}
