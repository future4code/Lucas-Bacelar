import { useAuthenticate } from '../hooks/index';
import styled from 'styled-components';
import { goToAdminHomePage } from '../routes/coordinator';
import { useHistory } from 'react-router';
import Form from '../components/CreateTripPage/Form';
import { Button } from './../components/index';

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

const CreateTripPage = () => {
  useAuthenticate();
  const history = useHistory();

  return (
    <PageContainer>
      <div></div>
      <div>
        <h1>Criar viagem</h1>
        <Form />
        <Button
          type="button"
          onClick={() => goToAdminHomePage(history)}
          text="Voltar"
          color="alert"
        />
      </div>
    </PageContainer>
  );
};

export default CreateTripPage;
