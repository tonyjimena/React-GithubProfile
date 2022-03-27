import React, { useState, useEffect, useContext } from 'react';
import { useGithub } from '../hooks/useGithub';
import { getUserInfo, getRepos } from '../services/githubApi';

const ProfileContext = React.createContext();

function ProfileProvider(props) {
  const gitProfileInfo = {
    company: 'React',
    companyImage:
      'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    url: 'https://github.com/tonyjimena',
    avatar_url: 'https://avatars.githubusercontent.com/u/59872884?v=4',
    name: 'name',
    bio: 'bio',
    following: '11',
    followers: '5',
    created_at: 'created at',
    repos_url: '',
    repos: '',
    changeData: (property, value) => {
      setUserInfo((userInfo) => {
        return { ...userInfo, [property]: value };
      });
    },
  };

  const [userInfo, setUserInfo] = useState(gitProfileInfo);

  const { profile, repositories } = useGithub({});

  useEffect(() => {
    setUserInfo((userInfo) => {
      return { ...userInfo, ...profile, repos: repositories };
    });
    console.log(userInfo);
  }, [profile, repositories]);

  return (
    <ProfileContext.Provider value={userInfo}>
      {props.children}
    </ProfileContext.Provider>
  );
}

export { ProfileContext, ProfileProvider };
