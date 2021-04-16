import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import * as api from "../utils/labexAPI";
import { goToApplicationFormPage } from "../routes/coordinator";

const ListTripsPage = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    api.getTrips().then((response) => {
      setTrips(response);
      setLoading(false);
    });
  }, []);

  const tripsList = trips.map((trip) => {
    return (
      <li key={trip.id}>
        <p>{trip.name}</p>
        <p>{trip.description}</p>
        <p>{trip.planet}</p>
        <p>{trip.durationInDays}</p>
        <p>{trip.date}</p>
      </li>
    );
  });

  return (
    <div>
      <h1>ListTripsPage</h1>
      <button onClick={() => history.goBack()}>Voltar</button>
      <button onClick={() => goToApplicationFormPage(history)}>
        Inscrever-se
      </button>
      <ul>
        {loading ? (
          <div>Loading</div>
        ) : tripsList.length === 0 ? (
          <div>{"Não temos ninguem aqui :("}</div>
        ) : (
          tripsList
        )}
      </ul>
    </div>
  );
};

export default ListTripsPage;
