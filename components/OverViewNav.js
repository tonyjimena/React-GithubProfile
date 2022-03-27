import React from 'react';

import { Link, Route, useRoute } from 'wouter';
import { Transition } from 'react-transition-group';

import UserGitRepos from './UserGitRepos';
import UserOverview from './UserOverview';

export default function OverViewNav() {
  const [match, params] = useRoute('/repositories');

  return (
    <>
      <div className="overview-navigation">
        <Link href="/">
          <a className="link current">Overview</a>
        </Link>

        <Link href="/repositories">
          <a className="link">Repositories</a>
        </Link>
      </div>

      <Route path="/" component={UserOverview} />

      <Transition
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Route path="/repositories" component={UserGitRepos} />
      </Transition>
    </>
  );
}
