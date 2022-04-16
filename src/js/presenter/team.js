import {remove, render, RenderPosition} from "@/js/utils/render";
import MembersList from "@/js/views/members-list";
import Member from "@/js/views/member";
import {UpdateType} from "@/js/constants";
import MembersButton from "@/js/views/members-button";

export default class Team {
  constructor(container, membersModel, api) {
    this._container = container;
    this._membersModel = membersModel;
    this._api = api;

    this._membersListComponent = new MembersList();
    this._membersButtonComponent = new MembersButton();

    this._handleMembersModelEvt = this._handleMembersModelEvt.bind(this);
    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  init() {
    this._membersModel.addObserver(this._handleMembersModelEvt);
    this._loadData(UpdateType.INIT_LOAD);
  }

  _handleMembersModelEvt(updateType) {
    remove(this._membersButtonComponent);

    if (updateType === UpdateType.INIT_LOAD) {
      remove(this._membersListComponent);
      this._renderMembersList();
    }

    // switch (updateType) {
    //   case UpdateType.INIT_LOAD:
    //     remove(this._membersListComponent);
    //     this._renderMembersList();
    //     this._renderMembers(this._getMembers());
    //     break;
    //   case UpdateType.LOAD:
    //     this._renderMembers(this._getLastMembers());
    //     break;
    // }
    this._renderMembers(this._getLastMembers());

    if (this._getCurrentPage() < this._getTotalPages()) {
      this._renderMembersButton();
      this._membersButtonComponent.setButtonClickHandler(this._handleButtonClick);
    }
  }

  _getMembers() {
    return this._membersModel.getMembers();
  }

  _getLastMembers() {
    return this._membersModel.getLastMembers();
  }

  _getCurrentPage() {
    return this._membersModel.getCurrentPage();
  }

  _getTotalPages() {
    return this._membersModel.getTotalPages();
  }

  _renderMembersList() {
    render(this._container, this._membersListComponent, RenderPosition.BEFOREEND);
  }

  _renderMembers(members) {
    members.forEach(member => {
      const memberComponent = new Member(member);
      render(this._membersListComponent, memberComponent, RenderPosition.BEFOREEND);
    });
  }

  _renderMembersButton() {
    render(this._container, this._membersButtonComponent, RenderPosition.BEFOREEND);

  }

  _handleButtonClick() {
    this._loadData(UpdateType.LOAD, this._getCurrentPage() + 1);
  }

  _loadData(updateType, page, duty) {
    this._api.loadMembers(page, duty)
      .then(res => res.json())
      .then(data => {
        this._membersModel.setData(updateType, data.data);
      })
      .catch(error => {
        this._membersModel.setData(updateType, null);
        console.error(error);
      });
  }
}
