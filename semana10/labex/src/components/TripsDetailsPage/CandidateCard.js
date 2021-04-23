import styled from 'styled-components';
import { Button } from '../../components/index';

const CardContainer = styled.article`
  max-width: 600px;
  padding: 10px 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  background: #c4c4c4;
  gap: 10px;

  word-wrap: break-word;

  font-size: 1.25rem;

  h2 {
    font-weight: 500;
    text-align: center;
  }

  & > p:first-of-type {
    & > strong {
      font-size: 1.5rem;
    }
    text-align: right;
  }

  & > div {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }

  & button {
    padding: 5px 10px;
  }
`;
const CandidateCard = ({ candidate, decide }) => {
  return (
    <CardContainer>
      <h2>{candidate.name}</h2>
      <p>
        <strong>{candidate.age}</strong> anos
      </p>
      <p>
        <strong>Profissão: </strong>
        {candidate.profession}
      </p>
      <p>
        <strong>Pais: </strong>
        {candidate.country}
      </p>
      <p>
        <strong>Texto Candidatura:</strong>
      </p>
      <p>{candidate.applicationText}</p>
      <div>
        <Button
          onClick={() => decide(candidate.id, true)}
          text="Aprovar"
          color="ok"
        />
        <Button
          onClick={() => decide(candidate.id, false)}
          text="Reprovar"
          color="alert"
        />
      </div>
    </CardContainer>
  );
};

export default CandidateCard;
