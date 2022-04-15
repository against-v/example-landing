import Abstract from "./abstract";

const createHeaderTemplate = () => `<footer class="footer">footer</footer>`;

export default class Footer extends Abstract {
  getTemplate() {
    return createHeaderTemplate();
  }
}
