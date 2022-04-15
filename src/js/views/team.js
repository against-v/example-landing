import Abstract from "./abstract";

const createHeaderTemplate = () => `<section class="team"></section>`;

export default class Team extends Abstract {
  getTemplate() {
    return createHeaderTemplate();
  }
}
