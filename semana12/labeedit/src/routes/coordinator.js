const goToLoginPage = (history) => history.push('/');

const goToRegisterPage = (history) => history.push('/registro');

const goToFeedPage = (history) => history.push('/feed');

const goToPostPage = (history, id) => history.push(`/post/${id}`);

export { goToLoginPage, goToRegisterPage, goToFeedPage, goToPostPage };
