import {render, RenderPosition} from "@/js/utils/render";
import MembersList from "@/js/views/members-list";

export default class Team {
  constructor(root, membersModel) {
    this._root = root;
    this._membersModel = membersModel;
    this._isLoading = this._membersModel.getIsLoading();

    this._handleModelEvt = this._handleModelEvt.bind(this);
  }

  init() {
    this._membersModel.addObserver(this._handleModelEvt);
  }

  _handleModelEvt(updateType, data) {
    // remove(this._loadingComponent);
    this._renderTeam();
  }

  _getMembers() {
    return this._membersModel.getMembers();
  }

  _renderTeam() {
    const teamComponent = new MembersList();
    render(this._root, teamComponent, RenderPosition.AFTERBEGIN);
  }
}
