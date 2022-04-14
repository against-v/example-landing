import Abstract from "./abstract";

const createHeaderTemplate = () => `<footer>header</footer>`;

export default class Footer extends Abstract {
  getTemplate() {
    return createHeaderTemplate();
  }
}
