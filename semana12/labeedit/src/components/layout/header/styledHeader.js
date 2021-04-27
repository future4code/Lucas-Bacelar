import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px 40px;
  background: var(--secondary);

  & > img {
    height: 40px;
  }

  & > div {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const Button = styled.button`
  width: 95px;
  height: 35px;
  border-radius: 16px;
  background-color: var(--primary);
  color: white;
  font-weight: 500;
`;
