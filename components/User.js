import React, { useContext } from 'react';

import { ProfileContext } from '../context/Context';
import Follows from './Follows';
// import ChangeTeam from './ChangeTeam';
import UserGitRepos from './UserGitRepos';

export default function User() {
  const context = useContext(ProfileContext);
  return (
    <div className="user">
      <div className="user-head">
        <a href={context.url}>
          <img src={context.avatar_url} width="77" />
        </a>
        <h1 className="profile-name">{context.name}</h1>
        <h2 className="profile-bio">{context.bio}</h2>
      </div>
      <Follows/>
      <p className="profile-bio">
        Active since: {context.created_at.split('T')[0]}
      </p>
      <p className="profile-bio">{context.company}</p>
      <button
        className="profile-button"
        onClick={() => context.changeData('company', 'TonyReact')}
      >
        Change company
      </button>
      <UserGitRepos />
    </div>
  );
}
