import logo from 'assets/Logo.png';
import { Input } from 'components/common/index';
import { useForm } from 'hooks/index';
import labeddit from 'services/labeddit';
import {
  RegistrationContainer,
  RegistrationContent,
  RegistrationForm,
} from './styledRegister';
import { useContext } from 'react';
import GlobalStateContext from 'global/GlobalStateContext';

const Register = () => {
  const [form, handleInput] = useForm({
    username: '',
    email: '',
    password: '',
  });
  const { register } = useContext(GlobalStateContext);

  const registerAux = (e) => {
    e.preventDefault();
    register(form);
  };

  return (
    <RegistrationContainer>
      <div></div>
      <RegistrationContent>
        <img src={logo} alt="logo with site name" />
        <h2>Cadastro</h2>
        <RegistrationForm onSubmit={registerAux}>
          <Input
            type="text"
            name="username"
            placeholder="username"
            value={form.username}
            onChangeValue={handleInput}
            pattern="[a-zA-Z0-9]{5,30}"
            title="O username só pode conter caracteres válidos exemplo Lucas123, no minimo 5 no máximo 30"
          ></Input>
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
            pattern=".{5,}"
            title="A senha deve conter no minimo 5 caracteres"
          />
          <button>Cadastrar</button>
        </RegistrationForm>
      </RegistrationContent>
    </RegistrationContainer>
  );
};

export default Register;
