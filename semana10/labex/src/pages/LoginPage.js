import { useHistory } from "react-router";
import { useForm, useIsLogged } from "../hooks/index";
import { goToAdminHomePage, goToHomePage } from "../routes/coordinator";
import * as api from "../utils/labexAPI";
import Input from "../components/Input";

const LoginPage = () => {
  useIsLogged();
  const history = useHistory();
  const [form, handleInputChange] = useForm([{ email: "", password: "" }]);

  const onClickLogin = () => {
    console.log(form);
    api
      .login(form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        goToAdminHomePage(history);
      })
      .catch((err) => {
        alert("Ocorreu um erro talvez essa conta não exista");
      });
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <form>
        <Input
          name="email"
          value={form.email}
          handleValue={handleInputChange}
          placeholder="email"
          pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
        />
        <Input
          name="password"
          type="password"
          value={form.password}
          handleValue={handleInputChange}
          placeholder="password"
        />
      </form>
      <button onClick={onClickLogin}>Login</button>
      <button onClick={() => goToHomePage(history)}>Voltar</button>
    </div>
  );
};

export default LoginPage;
