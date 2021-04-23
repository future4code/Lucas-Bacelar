import axios from "axios";

axios.defaults.baseURL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-bacelar-cruz";

const getToken = () => {
const token = localStorage.getItem('token')

  return {
    headers: {
      auth: token,
    },
  };
};

const getTrips = async () => {
  try {
    const request = await axios.get("/trips");
    return request.data.trips;
  } catch (err) {
    console.log(err);
  }
};

const login = (body) => {
  return axios.post("/login", body);
};

const applyToTrip = async (id, data) => {
  try {
    const request = await axios.post(`/trips/${id}/apply`, data);
    return request.data.message;
  } catch (err) {
    return err.message;
  }
};

const createTrip = async (data) => {
  const auth = getToken();

  try {
    await axios.post("/trips", data, auth);
    alert("O item foi criado");
  } catch (err) {
    alert("Ocorreu um erro :(");
  }
};

const deleteTrip = async (id) => {
  const auth = getToken();

  try {
    const request = await axios.delete(`/trips/${id}`, auth);
    return request.data;
  } catch (err) {
    return err.message;
  }
};

const getTripDetails = async (id) => {
  const auth = getToken();
  try {
    const request = await axios.get(`/trip/${id}`, auth);
    return request.data.trip
  } catch (err) {
    return err.message;
  }
};

const decideCandidate = async (tripId, candidateId, approved) => {
  const auth = getToken();
  const data = {approve: approved};
  try {
    const request = await axios.put(`/trips/${tripId}/candidates/${candidateId}/decide`, data, auth)
    console.log(request.data)
  } catch (err) {
    console.log(err.message)
  }
}

export { getTrips, applyToTrip, login, createTrip, deleteTrip, getTripDetails, decideCandidate };
