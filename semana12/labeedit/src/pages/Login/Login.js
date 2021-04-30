import { LoginContainer, LoginForm, LoginContent } from './styledLogin';
import logo from 'assets/Logo.png';
import { Input } from 'components/common/index';
import { useForm } from 'hooks/index';
import { useHistory } from 'react-router';
import { goToRegisterPage } from 'routes/coordinator';
import { useContext } from 'react';
import GlobalStateContext from 'global/GlobalStateContext';

const Login = () => {
  const history = useHistory();
  const [form, handleInput] = useForm({ email: '', password: '' });
  const { login } = useContext(GlobalStateContext);

  const loginAux = (event) => {
    login(event, form);
  };

  return (
    <LoginContainer>
      <div></div>
      <LoginContent>
        <img src={logo} alt="logo with site name" />
        <h2>Login</h2>
        <LoginForm onSubmit={loginAux}>
          <Input
            type="email"
            name="email"
            placeholder="email"
            value={form.email}
            onChangeValue={handleInput}
          />
          <Input
            type="password"
            name="password"
            placeholder="senha"
            value={form.password}
            onChangeValue={handleInput}
          />
          <button>Login</button>
          <button type="button" onClick={() => goToRegisterPage(history)}>
            Cadastrar-se
          </button>
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
