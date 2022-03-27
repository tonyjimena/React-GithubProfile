import { useEffect, useState } from 'react';
import { getUserInfo, getRepos } from '../services/githubApi';

export function useGithub({}) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState();
  const [repositories, setRepos] = useState([]);

  useEffect(() => {
    setLoading(true);
    getUserInfo()
      .then((res) => setProfile(res))
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {});

    getRepos().then((res) => setRepos(res));
  }, []);

  return { profile, repositories };
}
