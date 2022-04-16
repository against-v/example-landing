export default class Api {
  loadMembers(page, duty) {
    const params = new URLSearchParams({
      limit: 5
    });
    page && params.append("page", page);
    duty && params.append("duty", duty);
    return fetch(`https://challenge-api.view.agentur-loop.com/api.php?${params}`, {method: "GET"});
  }
}
