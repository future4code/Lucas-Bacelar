import styled from 'styled-components';
import { COLORS } from '../utils/colors';

const StyledButton = styled.button`
  background: ${(props) => (props.primary ? props.color : 'white')};
  color: white;
  font-size: 1.75rem;
  font-weight: 500;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;

const Button = ({ text, color, onClick }) => {
  return (
    <StyledButton primary onClick={onClick} color={COLORS[color]}>
      {text}
    </StyledButton>
  );
};

export default Button;
