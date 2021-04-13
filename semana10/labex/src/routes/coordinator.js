const goToHomePage = (history) => {
  history.push("/");
};

const goToListTripsPage = (history) => {
  history.push("/trips/list");
};

const goToApplicationFormPage = (history) => {
  history.push("/trips/application");
};

const goToLoginPage = (history) => {
  history.push("/login");
};

const goToAdminHomePage = (history) => {
  history.push("/admin/trips/list");
};

const goToTripsDetailsPage = (history) => {
  history.push("/admin/trips/:id");
};

const goToCreateTripPage = (history) => {
  history.push("/admin/trips/create");
};

export {
  goToHomePage,
  goToListTripsPage,
  goToApplicationFormPage,
  goToLoginPage,
  goToAdminHomePage,
  goToTripsDetailsPage,
  goToCreateTripPage,
};
