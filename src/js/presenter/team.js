import {remove, render, RenderPosition} from "@/js/utils/render";
import MembersList from "@/js/views/members-list";
import Member from "@/js/views/member";
import {EvtType} from "@/js/constants";
import MembersButton from "@/js/views/members-button";
import MembersFilter from "@/js/views/members-filter";

export default class Team {
  constructor(container, membersModel, api) {
    this._container = container;
    this._membersModel = membersModel;
    this._api = api;
    this._filter = "";

    this._membersListComponent = new MembersList();
    this._membersButtonComponent = new MembersButton();
    this._membersFilterComponent = new MembersFilter();

    this._handleMembersModelEvt = this._handleMembersModelEvt.bind(this);
    this._handleButtonClick = this._handleButtonClick.bind(this);
    this._handleFilterButtonClick = this._handleFilterButtonClick.bind(this);
  }

  init() {
    this._membersModel.addObserver(this._handleMembersModelEvt);
    this._loadData(EvtType.INIT_LOAD);
    this._renderMembersFilter();
    this._membersFilterComponent.setButtonClickHandler(this._handleFilterButtonClick);
  }

  _handleMembersModelEvt(evtType) {
    remove(this._membersButtonComponent);

    if (evtType === EvtType.INIT_LOAD) {
      remove(this._membersListComponent);
      this._renderMembersList();
    }
    this._renderMembers(this._getLastMembers());

    if (this._getCurrentPage() < this._getTotalPages()) {
      this._renderMembersButton();
      this._membersButtonComponent.setButtonClickHandler(this._handleButtonClick);
    }
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

  _renderMembersFilter() {
    this._membersFilterComponent.init();
    render(this._container, this._membersFilterComponent, RenderPosition.BEFOREEND);
  }

  _handleButtonClick() {
    this._loadData(EvtType.LOAD, this._getCurrentPage() + 1, this._filter);
  }

  _handleFilterButtonClick(value) {
    this._filter = value;
    this._loadData(EvtType.INIT_LOAD, 1, this._filter);
  }

  _loadData(evtType, page, duty) {
    this._api.loadMembers(page, duty)
      .then(res => res.json())
      .then(data => {
        this._membersModel.setData(evtType, data.data);
      })
      .catch(error => {
        this._membersModel.setData(evtType, null);
        console.error(error);
      });
  }
}
