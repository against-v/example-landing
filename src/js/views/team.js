import Abstract from "./abstract";

const createHeaderTemplate = () => (
  `<section class="team">
    <div class="team__header">
      <h2 class="team__title">Unser Team</h2>
      <h3 class="team__subtitle">Subtitle Team</h3>
    </div>
  </section>`
);

export default class Team extends Abstract {
  getTemplate() {
    return createHeaderTemplate();
  }
}
