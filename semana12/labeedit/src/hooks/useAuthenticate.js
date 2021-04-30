import { useEffect } from 'react';

const useAuthenticate = (token, setToken, setUserData, history, location) => {
  useEffect(() => {
    const tempToken = localStorage.getItem('token');
    const tempUser = localStorage.getItem('user');
    const path = location.pathname;
    if (tempToken && tempUser) {
      setToken(tempToken);
      setUserData(JSON.parse(tempUser));
      if (path === '/' || path === '/registro') {
        history.replace('/feed');
      } else {
        history.replace(path);
      }
    } else {
      if (path === '/feed' || path === '/post/:id') {
        history.replace('/');
      } else {
        history.replace(path);
      }
    }
  }, []);
};

export default useAuthenticate;
