function getRepos() {
  return fetch('https://api.github.com/users/tonyjimena/repos')
    .then((res) => {
      if (res.status == 403) {
        // return localStorage.getItem('repos');
      }
      return res.json();
    })
    .then((res) => {
      localStorage.setItem('repos', JSON.parse(res));
      return res;
    });
}

function getUserInfo() {
  return fetch('https://api.github.com/users/tonyjimena')
    .then((res) => {
      if (res.status == 403) {
        // const localStorageUserInfo = localStorage.getItem('userInfo');
        // return JSON.parse(localStorageUserInfo);
      }
      return res.json();
    })
    .then((res) => {
      localStorage.setItem('userInfo', JSON.parse(res));

      return res;
    });
}

export { getRepos, getUserInfo };

const sampleResponse = `{
  "company": "React",
  "companyImage":
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  "url": "https://github.com/tonyjimena",
  "avatar_url": "https://avatars.githubusercontent.com/u/59872884?v=4",
  "name": "name",
  "bio": "bio",
  "following": "11",
  "followers": "5",
  "created_at": "created at",
  "repos_url": "",
  "repos":"[
    {
      "id": 1,
      "name": "React-GithubProfile-UseContext-example",
      "url": "/",
    },
  ]",
}`;
