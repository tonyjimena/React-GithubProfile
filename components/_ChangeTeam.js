import React, { useContext } from 'react';

import { ProfileContext } from '../context/Context';

export default function ChangeTeam() {
  const context = useContext(ProfileContext);
  return (
    <>
      <button
        className="profile-button"
        onClick={() => context.changeData('team', 'TonyVue')}
      >
        Vue
      </button>
      <button
        className="profile-button"
        onClick={() => context.changeData('team', 'TonyReact')}
      >
        React
      </button>
    </>
  );
}
