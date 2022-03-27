import React, { useContext, useEffect } from 'react';

import { ProfileContext } from '../context/Context';
import User from './User';

export default function Profile() {
  const context = useContext(ProfileContext);

  return (
    <div className="profile">
      <img width="50" src={context.companyImage} />
      <User />
    </div>
  );
}
