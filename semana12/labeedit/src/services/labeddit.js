import axios from 'axios';

axios.defaults.baseURL =
  'https://us-central1-labenu-apis.cloudfunctions.net/labEddit';

const createConfig = (method, url, auth, data = '') => {
  const config = {
    method: method,
    url: url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
    data: data,
  };
  return config;
};

const signup = (data) => {
  const request = axios.post('/signup', data);
  return request.then((response) => response.data);
};

const login = (data) => {
  const request = axios.post('/login', data);
  return request.then((response) => response.data);
};

const getPosts = (token) => {
  const request = axios.get('/posts', {
    headers: {
      Authorization: token,
    },
  });
  return request.then((response) => response.data);
};

const votePost = (id, direction, token) => {
  const config = createConfig('put', `/posts/${id}/vote`, token, {
    direction: direction,
  });

  const request = axios(config);
  return request.then((response) => response.data);
};

const createPost = (token, data) => {
  const config = createConfig('post', `/posts`, token, data);

  const request = axios(config);
  return request.then((response) => response.data);
};

const getPostDetails = (token, id) => {
  const config = createConfig('get', `/posts/${id}`, token);
  const request = axios(config);
  return request.then((response) => response.data);
};

const createComment = (token, id, data) => {
  const config = createConfig('post', `/posts/${id}/comment`, token, data);

  const request = axios(config);
  return request.then((response) => response.data);
};

const voteComment = (token, postId, commentId, direction) => {
  const config = createConfig(
    'put',
    `/posts/${postId}/comment/${commentId}/vote`,
    token,
    {
      direction: direction,
    }
  );

  const request = axios(config);
  return request.then((response) => response.data);
};

export default {
  signup,
  login,
  getPosts,
  votePost,
  createPost,
  getPostDetails,
  createComment,
  voteComment,
};
