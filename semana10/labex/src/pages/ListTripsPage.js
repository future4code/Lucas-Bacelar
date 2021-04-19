import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Button, TripCard } from '../components/index';
import * as api from '../utils/labexAPI';
import { goToApplicationFormPage, goToHomePage } from '../routes/coordinator';

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

const ListTripsPage = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    api.getTrips().then((response) => {
      setTrips(response);
      setLoading(false);
    });
  }, []);

  const filteredTrips = trips.filter((trip) => {
    return trip.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <PageContainer>
      <section>
        <Button
          onClick={() => goToHomePage(history)}
          color="alert"
          text="Voltar"
        />
        <SearchBar type="search" value={search} onChange={handleSearch} />
        <Button
          onClick={() => goToApplicationFormPage(history)}
          color="primary"
          text="Inscrever-se"
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
                  onClick={() => goToApplicationFormPage(history)}
                  text="Aplicar"
                  color="ok"
                />{' '}
              </TripCard>
            );
          })
        )}
      </TripsContainer>
    </PageContainer>
  );
};

export default ListTripsPage;
