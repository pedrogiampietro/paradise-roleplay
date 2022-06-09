import { useEffect, useState } from 'react';
import { getAuthStatus } from '../utils/api';
import { User } from '../utils/types';

export function useFetchUser() {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAuthStatus()
      .then(({ data }) => {
        localStorage.setItem('Paradise@User', JSON.stringify(data));
        setUser(data);
      })
      .catch(err => {
        console.error(err);
        setError(err);
      })
      .finally(() => setTimeout(() => setLoading(false), 1000));
  }, []);

  return { user, error, loading };
}
