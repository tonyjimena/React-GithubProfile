function getRepos() {
  return fetch('https://api.github.com/users/tonyjimena/repos')
    .then((res) => {
      if (res.status == 403) {
        return localStorage.getItem('repos').json();
      }
      return res.json();
    })
    .then((res) => {
      localStorage.setItem('repos', res.toString());
      return res;
    });
}

function getUserInfo() {
  return fetch('https://api.github.com/users/tonyjimena')
    .then((res) => {
      if (res.status == 403) {
        return localStorage.getItem('userInfo').json();
      }

      return res.json();
    })
    .then((res) => {
      localStorage.setItem('userInfo', res.toString());

      return res;
    });
}

export { getRepos, getUserInfo };
