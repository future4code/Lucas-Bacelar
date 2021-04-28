import styled from 'styled-components';

const RegistrationContainer = styled.main`
  min-height: 530px;
  max-width: 840px;
  margin: 80px auto 0;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 100px 1fr;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);

  & > div:first-of-type {
    border-radius: 8px;
    background: var(--form-lateral-div);
  }

  @media (max-width: 840px) {
    margin: 10vw 10px 0;
    grid-template-columns: 1fr;

    & > div:first-of-type {
      display: none;
    }
  }
`;

const RegistrationContent = styled.section`
  border-radius: 0 8px 8px 0;
  padding: 54px 0;
  display: flex;
  gap: 73px;
  flex-direction: column;
  align-items: center;
  background: white;

  & > img {
    height: 48px;
  }
`;

const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  & > button {
    border-radius: 16px;
    margin-top: 18px;
    height: 41px;
  }

  & > button:first-of-type {
    width: 280px;
    background-color: var(--primary);
    color: white;
    opacity: 0.9;
    font-size: 20px;
    font-weight: 500;

    &:hover {
      opacity: 1;
    }
  }
`;

export { RegistrationContainer, RegistrationForm, RegistrationContent };
