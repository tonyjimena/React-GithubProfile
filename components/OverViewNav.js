import React from 'react';

import { Link, Route, useRoute, Switch } from 'wouter';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import UserGitRepos from './UserGitRepos';
import UserOverview from './UserOverview';

export default function OverViewNav() {
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

      <TransitionGroup>
        <CSSTransition timeout={500} classNames="slides">
          <Switch>
            <Route exact path="/" component={UserOverview} />
            <Route path="/repositories" component={UserGitRepos} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}
