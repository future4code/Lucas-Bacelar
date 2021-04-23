import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import PageCard from '../components/HomePage/PageCard';
import rocket from '../imgs/trips-img.png';
import admin from '../imgs/adm-img.png';
import { goToListTripsPage, goToLoginPage } from '../routes/coordinator';

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;
`;

const HomePage = () => {
  const history = useHistory();

  return (
    <HomeContainer>
      <PageCard
        goto={() => goToListTripsPage(history)}
        img={rocket}
        btnName="Ver viagens"
      />
      <PageCard
        goto={() => goToLoginPage(history)}
        img={admin}
        btnName="Pagina Admin"
      />
    </HomeContainer>
  );
};

export default HomePage;
