import Abstract from "./abstract";

const createHeaderTemplate = () => `<section>team</header>`;

export default class Team extends Abstract {
  getTemplate() {
    return createHeaderTemplate();
  }
}
