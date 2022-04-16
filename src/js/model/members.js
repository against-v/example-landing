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

  setData(evtType, data) {
    if (data) {
      this._lastMembers = data.data.slice();
      this._currentPage = data.meta.pagination.current_page;
      this._totalPages = data.meta.pagination.total_pages;
    }
    this._notify(evtType);
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
