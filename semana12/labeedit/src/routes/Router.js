import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from 'pages/index';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/registro">
          <h1>Registro</h1>
        </Route>

        <Route exact path="/feed">
          <h1>Feed</h1>
        </Route>

        <Route exact path="/post/:id">
          <h1>Post</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
