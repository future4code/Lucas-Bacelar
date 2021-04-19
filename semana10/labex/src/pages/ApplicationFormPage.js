import { useHistory } from 'react-router';
import styled from 'styled-components';
import Form from '../components/ApplicationFormPage/Form';
import { Button } from '../components/index';
import * as api from '../utils/labexAPI';
import getCountries from '../utils/restCountriesAPI';
import { useEffect, useState } from 'react';
import { goToListTripsPage } from '../routes/coordinator';

const PageContainer = styled.main`
  display: grid;
  grid-template-columns: 5fr 8fr;

  & > div:first-child {
    background: linear-gradient(
      to bottom right,
      rgba(141, 145, 185, 0.45),
      rgba(49, 52, 71, 0.78)
    );
  }

  & > div:nth-child(2) {
    width: 100%;
    height: 100%;

    padding: 40px 32px;

    & > h1 {
      color: white;
      font-size: 2.75rem;
      text-align: center;
    }

    & > button {
      position: relative;
      top: 80px;
      font-size: 1.5rem;
      padding: 5px 20px;
    }
  }
`;

const ApplicationFormPage = () => {
  const history = useHistory();
  const [trips, setTrips] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    api.getTrips().then((res) => {
      setTrips(res);
    });
    getCountries().then((res) => {
      setCountries(res.map((country) => country.name));
    });
  }, []);

  return (
    <PageContainer>
      <div></div>
      <div>
        <h1>Inscreva-se para uma viagem</h1>
        <Form countries={countries} trips={trips} history={history} />
        <Button
          onClick={() => goToListTripsPage(history)}
          color="alert"
          text="Voltar"
        />
      </div>
    </PageContainer>
  );
};

export default ApplicationFormPage;
