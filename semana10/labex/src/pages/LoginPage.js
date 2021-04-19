import { useHistory } from 'react-router';
import styled from 'styled-components';
import { COLORS } from '../utils/colors';
import { useForm, useIsLogged } from '../hooks/index';
import { goToAdminHomePage, goToHomePage } from '../routes/coordinator';
import * as api from '../utils/labexAPI';
import { Input, Button } from '../components/index';

const PageContainer = styled.main`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  & > h1 {
    margin: 40px 0;
    background: rgba(118, 110, 110, 0.33);
    padding: 10px 30px;
    border-radius: 20px;
    font-size: 7rem;
    font-weight: 300;

    & > span {
      color: ${COLORS.primary};
      font-weight: bold;
    }
  }

  & > h2 {
    font-size: 4rem;
    font-weight: 400;
  }

  & > form {
    padding-top: 60px;
    padding-bottom: 30px;
    display: flex;
    gap: 30px;
    flex-direction: column;

    & > input {
      font-size: 1.5rem;
      padding: 0 12px;
      border-radius: 8px;
      background: ${COLORS.cardBkg};
      height: 50px;
      width: 530px;
      &::placeholder {
        text-align: center;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  & > button {
    border-radius: 8px;
    padding: 6px 20px;
  }

  & > button:first-of-type {
  }

  & > button:last-of-type {
    position: relative;
    top: 130px;
    align-self: flex-start;
  }
`;

const LoginPage = () => {
  useIsLogged();
  const history = useHistory();
  const [form, handleInputChange] = useForm([{ email: '', password: '' }]);

  const onClickLogin = () => {
    console.log(form);
    api
      .login(form)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        goToAdminHomePage(history);
      })
      .catch((err) => {
        alert('Ocorreu um erro talvez essa conta não exista');
      });
  };

  return (
    <PageContainer>
      <h1>
        Labe<span>X</span>
      </h1>
      <h2>Login</h2>
      <form>
        <Input
          name="email"
          value={form.email}
          handleValue={handleInputChange}
          placeholder="Email"
          pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'}
        />
        <Input
          name="password"
          type="password"
          value={form.password}
          handleValue={handleInputChange}
          placeholder="Password"
        />
      </form>
      <Button onClick={onClickLogin} text="Login" color="ok" />
      <Button
        onClick={() => goToHomePage(history)}
        text="Voltar"
        color="alert"
      />
    </PageContainer>
  );
};

export default LoginPage;
