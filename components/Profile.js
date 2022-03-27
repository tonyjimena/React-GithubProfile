import React, { useContext, useEffect } from 'react';

import { ProfileContext } from '../context/Context';
import User from './User';

export default function Profile() {
  const context = useContext(ProfileContext);

  return (
    <>
      <div className="header">
        <img width="40" src={context.companyImage} />
      </div>

      <div className="profile">
        <User />
      </div>
    </>
  );
}
