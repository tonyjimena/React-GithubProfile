import React, { useContext } from 'react';

import { ProfileContext } from '../context/Context';

export default function UserGitRepos() {
  const context = useContext(ProfileContext);

  return (
    <>
      <h4>Repositories</h4>
      <ul className="repo-list">
        {context.repos.length > 0 ? (
          context.repos.map((el) => {
            return (
              <li className="repo-item" key={el.id}>
                <h4>
                  <a className="accent" href={el.url}>
                    {el.name}
                  </a>
                </h4>
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
