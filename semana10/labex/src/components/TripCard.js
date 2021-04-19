import styled from 'styled-components';
import { COLORS } from '../utils/colors';

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 18px;
  gap: 15px;
  background: ${COLORS.cardBkg};
  opacity: 0.9;

  * {
    margin: 0;
    padding: 0;
  }

  & > div {
    align-self: stretch;
    display: flex;
    justify-content: space-between;
  }
`;

const TripCard = (props) => {
  return (
    <CardContainer>
      <h1>{props.trip.name}</h1>
      <h4>Planeta: {props.trip.planet}</h4>
      <p>Descrição: {props.trip.description}</p>
      <div>
        <p>Duração: {props.trip.durationInDays}</p>
        <p>Data: {props.trip.date}</p>
      </div>
      <div>{props.children}</div>
    </CardContainer>
  );
};

export default TripCard;
