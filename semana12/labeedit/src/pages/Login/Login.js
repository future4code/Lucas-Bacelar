import styled from 'styled-components';

const LoginContainer = styled.main`
  min-height: 530px;
  max-width: 840px;
  margin: 80px auto 0;
  display: grid;
  grid-template-columns: 100px 1fr;
  border: 1px solid red;

  & > div:first-of-type {
    background: var(--form-lateral-div);
  }

  & > section {
    display: flex;
    flex-direction: column;
    background: white;

    & > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
`;

const Login = () => {
  return (
    <LoginContainer>
      <div>ok</div>
      <section>
        <img />
        <form>
          <input></input>
          <input></input>
          <button>Login</button>
          <button>Cadastrar</button>
        </form>
      </section>
    </LoginContainer>
  );
};

export default Login;
