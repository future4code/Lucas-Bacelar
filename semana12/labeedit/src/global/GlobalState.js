import React, { useState } from 'react';
import GlobalStateContext from './GlobalStateContext';
import labeddit from 'services/labeddit';
import { Header } from 'components/layout/index';
import { useHistory, useLocation } from 'react-router';
import { useAuthenticate } from 'hooks/index';
import LoadingAnimation from 'components/LoadingAnimation';

const GlobalState = ({ children }) => {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useAuthenticate(token, setToken, setUserData, history, location);

  const logout = () => {
    localStorage.clear();
    setToken('');
    setUserData({});
    history.replace('/');
  };

  const login = (event, form) => {
    event.preventDefault();
    setLoading(true);
    labeddit
      .login(form)
      .then((response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        setToken(response.token);
        setUserData(response.user);
        setLoading(false);
        history.replace('/feed');
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const register = (form) => {
    setLoading(true);
    labeddit
      .signup(form)
      .then((response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        setToken(response.token);
        setUserData(response.user);
        setLoading(false);
        history.replace('/feed');
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <GlobalStateContext.Provider
      value={{
        userData,
        login,
        register,
        logout,
        token,
      }}
    >
      <Header isLogged={token ? true : false} />
      {loading ? <LoadingAnimation /> : children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
