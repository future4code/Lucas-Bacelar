import styled from 'styled-components';
import { Button } from '../../components/index';

const TripContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  color: #e3e3e3;
  background: linear-gradient(
    to bottom,
    rgba(34, 34, 34, 0.87),
    rgba(17, 15, 15, 0.45)
  );
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > h1 {
    text-align: center;
  }

  & > button {
    padding: 2px 8px;
    align-self: flex-end;
  }

  & > p {
    font-size: 1.5rem;
    & > strong {
      text-transform: capitalize;
    }
  }
`;

const TripDetails = ({ details, goback }) => {
  return (
    <TripContainer>
      <h1>{details.name}</h1>
      <p>
        <strong>Nome</strong> - {details.name}
      </p>
      <p>
        <strong>Descricao</strong> - {details.description}
      </p>
      <p>
        <strong>Planeta</strong> - {details.planet}
      </p>
      <p>
        <strong>Duração em dias</strong> - {details.durationInDays}
      </p>
      <p>
        <strong>Data</strong> - {details.date}
      </p>
      <Button onClick={goback} text="Voltar" color="alert" />
    </TripContainer>
  );
};

export default TripDetails;
