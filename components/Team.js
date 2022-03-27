import React, { useContext } from 'react';

import { ProfileContext } from '../context/Context';

export default function Team() {
  const context = useContext(ProfileContext);
  return (
    <div className="team">
      <p className="profile-team">{context.team}</p>
    </div>
  );
}
