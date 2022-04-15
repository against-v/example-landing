export default class Api {
  loadMembers() {
    return fetch("https://challenge-api.view.agentur-loop.com/api.php", {method: "GET"});
  }
}
