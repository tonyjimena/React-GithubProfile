function getRepos() {
  return fetch('https://api.github.com/users/tonyjimena/repos')
    .then((res) => {
      if (res.status == 403) {
      }
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
function getUserInfo() {
  return fetch('https://api.github.com/users/tonyjimena')
    .then((res) => {
      if (res.status == 403) {
      }
      return res.json();
    })
    .then((res) => {
      return res;
    });
}

export { getRepos, getUserInfo };
