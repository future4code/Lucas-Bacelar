import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, TripCard } from '../components/index';
import useAuthenticate from '../hooks/useAuthenticate';
import * as api from '../utils/labexAPI';
import {
  goToHomePage,
  goToCreateTripPage,
  goToLoginPage,
  goToTripsDetailsPage,
} from '../routes/coordinator';

const SearchBar = styled.input`
  height: 60px;
  align-self: center;
  padding: 0 20px;
  border-radius: 32px;
  background: #c4b0fb;
`;

const TripsContainer = styled.section`
  display: grid;
  padding: 0 180px;
  justify-items: center;
  grid-gap: 80px;
  grid-template-columns: 1fr 1fr;
`;

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  gap: 60px;

  & > section:first-child {
    padding: 0 117px;
    height: 64px;
    display: flex;
    justify-content: center;
    gap: 33px;

    & > input {
      flex: 2.5;
    }
    & > button {
      border-radius: 12px;
      flex: 1;
    }
  }
`;

const AdminHomePage = () => {
  useAuthenticate();
  const history = useHistory();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.getTrips().then((res) => {
      setTrips(res);
      setLoading(false);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    goToLoginPage(history);
  };

  const deleteTripAux = async (id) => {
    if (window.confirm('Você realmente deseja excluir essa viagem?')) {
      const response = await api.deleteTrip(id);
      if (response.success) {
        setTrips(trips.filter((trip) => trip.id !== id));
        alert('excluido com sucesso');
      } else {
        alert('ocorreu um erro');
      }
    }
  };

  const filteredTrips = trips.filter((trip) => {
    return trip.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <PageContainer>
      <section>
        <Button onClick={logout} text="Logout" color="primary" />
        <Button
          onClick={() => goToHomePage(history)}
          text="Voltar"
          color="alert"
        />
        <SearchBar type="search" value={search} onChange={handleSearch} />
        <Button
          onClick={() => goToCreateTripPage(history)}
          text="Criar Viagem"
          color="primary"
        />
      </section>
      <TripsContainer>
        {loading ? (
          <div>Loading</div>
        ) : filteredTrips.length === 0 ? (
          <div>{'Não temos ninguem aqui :('}</div>
        ) : (
          filteredTrips.map((trip) => {
            return (
              <TripCard key={trip.id} trip={trip}>
                <Button
                  onClick={() => goToTripsDetailsPage(history, trip.id)}
                  text="Detalhes"
                  color="primary"
                />
                <Button
                  onClick={() => deleteTripAux(trip.id)}
                  text="Excluir"
                  color="alert"
                />
              </TripCard>
            );
          })
        )}
      </TripsContainer>
    </PageContainer>
  );
};

export default AdminHomePage;
