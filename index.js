import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Profile from './components/Profile';
import { ProfileProvider } from './context/Context';

const App = () => (
  <ProfileProvider>
    <Profile />
  </ProfileProvider>
);

render(<App />, document.getElementById('root'));
