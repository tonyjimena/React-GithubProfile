import { useEffect, useState } from 'react';
import { getUserInfo, getRepos } from '../services/githubApi';

export function useGithub({}) {
  const [profile, setProfile] = useState({});
  const [repositories, setRepos] = useState([]);

  useEffect(() => {
    getUserInfo().then((res) => setProfile(res));

    getRepos().then((res) => setRepos(res));
  }, []);

  return { profile, repositories };
}
