import axios from "axios";
import react from "react";
import styled from "styled-components";
import {baseURL, config} from "../utils/configs"
import InputField from "./InputField";

const FormDiv = styled.div`
  margin: 50px auto;
  padding: 30px 40px;
  width: 350px;
  min-height: 200px;
  border: 1px solid black;
  background-color: #FDFDFD;
  border-radius: 2%;

  display: flex;
  flex-direction: column;

  & > h1 {
    text-align: center;
  }

  & > button {
    margin-top : 10px;
    font-weight: bold;
    padding: 8px 10px;
    background-color: #017AFF;
    color: #FDFDFD;
    border: none;
    box-shadow: 0 0 1px #017AFF;
    border-radius: 12px;
  }

  & > *:not(:last-child) {
    margin-bottom: 15px;
  }

  & input {
    box-shadow: 0px 0px 1px gray;
    background-color: #F2F2F2;
    height: 35px;
    border: none;
    font-size: 1.25rem;
    padding: 0 10px;
  }
`;

export default class InputForm extends react.Component {
  state = {
    name: '',
    email: '',
  }

  createUser = async () => {
    const body = {
      name: this.state.name,
      email: this.state.email,
    }
    try {
      await axios.post(baseURL , body, config);
      alert("Usuário cadastrado com sucesso!");
      this.setState({name: '', email: ''})
    } catch(error) {
      alert("Ocorreu um erro e não foi possivel fazer o cadastro :(");
    }
  }

  handleName = (event) => {
    this.setState({ name: event.target.value})
  
  }
  handleEmail = (event) => {
    this.setState({ email: event.target.value})
  }

  render() {
    return (
      <FormDiv>
        <h1>Criar</h1>
        <InputField 
          name="Nome:"
          onchange={this.handleName}
          value={this.state.name}
        />
        <InputField
          name="Email:"
          onchange={this.handleEmail}
          value={this.state.email}
        />
        <button onClick={this.createUser}>Salvar</button>
      </FormDiv>
    );
  }
}
