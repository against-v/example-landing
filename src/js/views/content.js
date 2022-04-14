import Abstract from "./abstract";

const createHeaderTemplate = () => `<section>content</header>`;

export default class Content extends Abstract {
  getTemplate() {
    return createHeaderTemplate();
  }
}
