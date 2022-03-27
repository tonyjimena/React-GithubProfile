function getRepos() {
  return fetch('https://api.github.com/users/tonyjimena/repos')
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}
function getUserInfo() {
  return fetch('https://api.github.com/users/tonyjimena')
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}

export { getRepos, getUserInfo };
