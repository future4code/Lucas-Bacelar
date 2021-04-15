import {
  AdminHomePage,
  ApplicationFormPage,
  CreateTripPage,
  HomePage,
  ListTripsPage,
  LoginPage,
  TripDetailsPage,
} from "../pages/index";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => {
  const pagesDetail = [
    { page: <HomePage />, path: "/" },
    { page: <ListTripsPage />, path: "/trips/list" },
    { page: <ApplicationFormPage />, path: "/trips/application" },
    { page: <LoginPage />, path: "/login" },
    { page: <AdminHomePage />, path: "/admin/trips/list" },
    { page: <CreateTripPage />, path: "/admin/trips/create" },
    { page: <TripDetailsPage />, path: "/admin/trips/:id" },
  ];

  const pagesRoutes = pagesDetail.map((route) => {
    return (
      <Route key={route.path} exact path={route.path}>
        {route.page}
      </Route>
    );
  });

  return (
    <BrowserRouter>
      <Switch>{pagesRoutes}</Switch>
    </BrowserRouter>
  );
};

export default Router;
