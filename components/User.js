import React, { useContext } from 'react';

import { ProfileContext } from '../context/Context';
import Team from './Team';
import ChangeTeam from './ChangeTeam';
import UserGitRepos from './UserGitRepos';

export default function User() {
  const context = useContext(ProfileContext);
  return (
    <div className="user">
      <a href={context.url}>
        <img src={context.userImage} width="138px" />
      </a>
      <h1 className="profile-userName">{context.userName}</h1>
      <Team />
      <ChangeTeam />
      <UserGitRepos />
    </div>
  );
}
