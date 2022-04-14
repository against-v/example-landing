import Abstract from "./abstract";

const createHeaderTemplate = () => `<section>title</section>`;

export default class Title extends Abstract {
  getTemplate() {
    return createHeaderTemplate();
  }
}
