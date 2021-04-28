import { LoginContainer, LoginForm, LoginContent } from './styledLogin';
import logo from 'assets/Logo.png';
import { Input } from 'components/common/index';
import { useForm } from 'hooks/index';
import labeddit from 'services/labeddit';
import { useHistory } from 'react-router';
import { goToRegisterPage } from 'routes/coordinator';

const Login = () => {
  const history = useHistory();
  const [form, handleInput, resetForm] = useForm({ email: '', password: '' });

  const Login = (e) => {
    e.preventDefault();
    labeddit
      .login(form)
      .then((response) => {
        console.log(response);
        resetForm();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <LoginContainer>
      <div></div>
      <LoginContent>
        <img src={logo} alt="logo with site name" />
        <LoginForm onSubmit={Login}>
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
            Cadastrar
          </button>
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
