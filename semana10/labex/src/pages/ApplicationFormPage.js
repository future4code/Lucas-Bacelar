import { useHistory } from "react-router";
import Input from "../components/Input";
import Select from "../components/Select"
import useInput from "../hooks/useInput";

const ApplicationFormPage = () => {
  const history = useHistory();
  const [name, handleName] = useInput();
  const [planets, handlePlanets] = useInput();

  return (
    <div>
      <h1>ApplicationFormPage</h1>
      <form>
        <Select value={planets} handleValue={handlePlanets} options={[1, 2, 3]}/>
        <Input value={name} handleValue={handleName} placeholder="name" />
      </form>
      <button onClick={() => history.goBack()}>Voltar</button>
      <button onClick={() => window.alert("Em construção T_T")}>Enviar</button>
    </div>
  );
};

export default ApplicationFormPage;
