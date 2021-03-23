import axios from "axios";
import react from "react";
import styled from "styled-components";
import InputField from "./InputField";

const FormDiv = styled.div`
  margin: 10px auto;
  padding: 20px 20px;
  width: 350px;
  height: 200px;
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    padding: 5px 10px;
  }

  & > *:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export default class InputForm extends react.Component {
  state = {
    nome: '',
    email: '',
  }

  registrarUsuario = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email,
    }

    const request = axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users' , body,{
      headers: {
        'Authorization': 'lucas-bacelar-cruz'
      }
    })

    request.then((response) => {
      alert("Usuário cadastrado com sucesso!");
    }).catch((error) => {
      alert("Ocorreu um erro e não foi possivel fazer o cadastro :(");
    })

    this.setState({
      nome: '',
      email: '',
    })
  }

  onChangeNome = (event) => {
    this.setState({ nome: event.target.value})
  
  }
  onChangeEmail = (event) => {
    this.setState({ email: event.target.value})
  }

  render() {
    return (
      <FormDiv>
        <InputField 
          nome="Nome:"
          onchange={this.onChangeNome}
          valor={this.state.nome}
        />
        <InputField
          nome="Email:"
          onchange={this.onChangeEmail}
          valor={this.state.email}
        />
        <button onClick={this.registrarUsuario}>Salvar</button>
      </FormDiv>
    );
  }
}
