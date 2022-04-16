import {UpdateType} from "@/js/constants";

export default class Members {

  constructor() {
    this._observers = [];
    this._members = [];
    this._lastMembers = [];
    this._currentPage = 1;
    this._totalPages = 1;
  }

  addObserver(observer) {
    this._observers.push(observer);
  }

  removeObserver(observer) {
    this._observers = this._observers.filter((existedObserver) => existedObserver !== observer);
  }

  setData(updateType, data) {
    // switch (updateType) {
    //   case UpdateType.INIT_LOAD:
    //     this._members = data.data.slice();
    //     break;
    //   case UpdateType.LOAD:
    //     this._members.concat(data.data);
    //     this._lastMembers = data.data.slice();
    //     break;
    // }
    this._lastMembers = data.data.slice();
    this._currentPage = data.meta.pagination.current_page;
    this._totalPages = data.meta.pagination.total_pages;

    this._notify(updateType);
  }

  getMembers() {
    return this._members;
  }

  getLastMembers() {
    return this._lastMembers;
  }

  getCurrentPage() {
    return this._currentPage;
  }

  getTotalPages() {
    return this._totalPages;
  }

  _notify(event, payload) {
    this._observers.forEach((observer) => observer(event, payload));
  }
}
