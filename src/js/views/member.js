import Abstract from "./abstract";

const createMemberTemplate = (member) => (
  `<li class="members-list__item member">
    <div class="member__photo"><img src="${member.image}" alt="${member.name}"></div>
    <div class="member__info">
      <p class="member__name">${member.name}</p>
      <p class="member__duties">${member.duties}</p>
    </div>
  </li>`
);

export default class MembersList extends Abstract {
  constructor(member) {
    super();
    this._member = member;
  }

  getTemplate() {
    return createMemberTemplate(this._member);
  }
}
