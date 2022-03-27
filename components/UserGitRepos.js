import React, { useContext } from 'react';

import { ProfileContext } from '../context/Context';

export default function UserGitRepos() {
  const context = useContext(ProfileContext);

  return (
    <>
      <h3>User github repositories</h3>
      <ul className="repo-list">
        {context.repos.length ? (
          context.repos.map((el) => {
            return (
              <li className="repo-item" key={el.id}>
                <a href={el.url}>{el.name}</a>
              </li>
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </ul>
    </>
  );
}
