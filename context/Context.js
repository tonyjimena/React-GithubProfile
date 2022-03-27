import React, { useState, useEffect, useContext } from 'react';
import { useGithub } from '../hooks/useGithub';
import { getUserInfo, getRepos } from '../services/githubApi';

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
    repos: [''],
    changeData: (property, value) => {
      setUserInfo({ ...userInfo, [property]: value });
    },
  };

  const [userInfo, setUserInfo] = useState(userInformation);

  // const { profile, repositories } = useGithub({});

  useEffect(() => {
    getUserInfo().then((res) => {
      console.log(res);
    });

    getRepos().then((res) => {
      userInformation.changeData('repos', res);
    });
  }, []);

  return (
    <ProfileContext.Provider value={userInfo}>
      {props.children}
    </ProfileContext.Provider>
  );
}

export { ProfileContext, ProfileProvider };
