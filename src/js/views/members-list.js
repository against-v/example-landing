import Abstract from "./abstract";

const createMembersListTemplate = () => `<ul class="team__list members-list"></ul>`;

export default class MembersList extends Abstract {
  getTemplate() {
    return createMembersListTemplate();
  }
}
