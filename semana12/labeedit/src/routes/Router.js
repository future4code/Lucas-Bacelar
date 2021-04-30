import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login, Register, Feed, Post } from 'pages/index';
import GlobalState from 'global/GlobalState';

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalState>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/registro">
            <Register />
          </Route>

          <Route exact path="/feed">
            <Feed />
          </Route>

          <Route exact path="/post/:id">
            <Post />
          </Route>

          <Route path="*">
            <h1>Error 404</h1>
          </Route>
        </Switch>
      </GlobalState>
    </BrowserRouter>
  );
};

export default Router;
