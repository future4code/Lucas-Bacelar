import axios from 'axios';

axios.defaults.baseURL =
  'https://us-central1-labenu-apis.cloudfunctions.net/labEddit';

const signup = (data) => {
  const request = axios.post('/signup', data);
  return request.then((response) => response.data);
};

const login = (data) => {
  const request = axios.post('/login', data);
  return request.then((response) => response.data);
};

export default { signup, login };
