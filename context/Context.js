import React, { useState, useEffect, useContext } from 'react';
const ProfileContext = React.createContext();

function ProfileProvider(props) {
  let userInformation = {
    company: 'React',
    companyImage:
      'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    url: 'https://github.com/tonyjimena',
    userImage: '',
    userName: '',
    fullName: '',
    team: '',
    repos: [],
    changeData: (property, value) => {
      setUserInfo({ ...userInfo, [property]: value });
    },
  };

  const [userInfo, setUserInfo] = useState(userInformation);

  useEffect(() => {
    if (userInformation.userName == '') {
      getUserInfo();
      console.log(userInfo);
    }
  }, []);

  function getRepos() {
    fetch('https://api.github.com/users/tonyjimena/repos')
      .then((res) => res.json())
      .then((res) => {
        userInformation.repos = res;
        setUserInfo(userInformation);
      })
      .catch((e) => {});
  }

  function getUserInfo() {
    fetch('https://api.github.com/users/tonyjimena')
      .then((res) => res.json())
      .then((res) => {
        userInformation.userName = res.login;
        userInformation.userImage = res.avatar_url;
        getRepos();
      })
      .catch((e) => {});
  }

  return (
    <ProfileContext.Provider value={userInfo}>
      {props.children}
    </ProfileContext.Provider>
  );
}

export { ProfileContext, ProfileProvider };
