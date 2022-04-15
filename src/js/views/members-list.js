import Abstract from "./abstract";

const createMembersListTemplate = () => `<div>members</div>`;

export default class MembersList extends Abstract {
  getTemplate() {
    return createMembersListTemplate();
  }
}
