import React from 'react';

import { Link, Route } from 'wouter';

import UserGitRepos from './UserGitRepos';
import UserOverview from './UserOverview';

export default function OverViewNav() {
  return (
    <div>
      <Link href="/repositories">
        <a className="link">Repositories</a>
      </Link>
      <Link href="/">
        <a className="link">Overview</a>
      </Link>

      <Route path="/" component={UserOverview} />
      <Route path="/repositories" component={UserGitRepos} />
    </div>
  );
}
