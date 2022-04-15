export default class Members {

  constructor() {
    this._observers = [];
    this._members = [];
    this._isLoading = false;
  }

  addObserver(observer) {
    this._observers.push(observer);
  }

  removeObserver(observer) {
    this._observers = this._observers.filter((existedObserver) => existedObserver !== observer);
  }

  setMembers(updateType, members) {
    console.log(updateType)
    console.log(members)
    this._members = members.slice();
    this._notify(updateType);
  }

  getMembers() {
    return this._members;
  }

  setIsLoading(val) {
    this._isLoading = val;
  }

  getIsLoading() {
    return this._isLoading;
  }

  _notify(event, payload) {
    this._observers.forEach((observer) => observer(event, payload));
  }
}
