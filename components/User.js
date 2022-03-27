import React, { useContext } from 'react';

import { ProfileContext } from '../context/Context';
import Follows from './Follows';
// import ChangeTeam from './ChangeTeam';
import OverViewNav from './OverViewNav';

export default function User() {
  const context = useContext(ProfileContext);
  return (
    <div className="user">
      <div className="user-head">
        <a href={context.url}>
          <img src={context.avatar_url} width="77" />
        </a>
        <h2 className="profile-name">{context.name}</h2>
        <p className="profile-bio">{context.bio}</p>
      </div>
      <Follows />
      <span className="profile-bio">
        Since: {context.created_at.split('T')[0]}
      </span>
      <p className="profile-bio">{context.company}</p>
      <OverViewNav />
    </div>
  );
}
