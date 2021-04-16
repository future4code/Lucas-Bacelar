import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import useAuthenticate from "../hooks/useAuthenticate";
import * as api from "../utils/labexAPI";
import {
  goToHomePage,
  goToCreateTripPage,
  goToLoginPage,
  goToTripsDetailsPage,
} from "../routes/coordinator";

const AdminHomePage = () => {
  useAuthenticate();
  const history = useHistory();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getTrips().then((res) => {
      setTrips(res);
      setLoading(false);
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    goToLoginPage(history);
  };

  const deleteTripAux = async (id) => {
    if (window.confirm("Você realmente deseja excluir essa viagem?")) {
      const response = await api.deleteTrip(id);
      if (response.success) {
        setTrips(trips.filter((trip) => trip.id !== id));
        alert("excluido com sucesso");
      } else {
        alert("ocorreu um erro");
      }
    }
  };

  const tripsList = trips.map((trip) => {
    return (
      <div
        key={trip.id}
        style={{ background: "gray", border: "1px solid red" }}
      >
        <p>{trip.name}</p>
        <p>{trip.description}</p>
        <p>{trip.planet}</p>
        <p>{trip.durationInDays}</p>
        <p>{trip.date}</p>
        <button onClick={() => deleteTripAux(trip.id)}> Excluir</button>
        <button onClick={() => goToTripsDetailsPage(history, trip.id)}>Detalhes</button>
      </div>
    );
  });

  return (
    <div>
      <h1>Pagina do ADM</h1>
      <button onClick={() => goToHomePage(history)}>Voltar</button>
      <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
      <button onClick={logout}>Logout</button>
      <div>
        {loading ? (
          <div>Loading</div>
        ) : tripsList.length === 0 ? (
          <div>{"Não temos ninguem aqui :("}</div>
        ) : (
          tripsList
        )}
      </div>
    </div>
  );
};

export default AdminHomePage;
