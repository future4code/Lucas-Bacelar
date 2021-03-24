import react, { Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import { baseURL, config } from "../utils/configs";
import InputField from "./InputField";

const TelaUsuarioDiv = styled.div`
  margin: 50px auto;
  padding: 10px;
  width: 500px;
  min-height: 300px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  background-color:#F2F2F2;

  & > h1 {
    text-align: center;
    margin-bottom: 40px;
  }

  & > p {
    font-size: 20px;
  }

  & > * {
    margin-bottom: 20px;
  }

  & span {
    font-weight: bold;
  }

  & button {
    padding: 5px;
    margin: 0 10px;
  }

  & > div {
    margin-bottom: 20px;

    & > input {
    width: 50%;
    height: 30px;
    }

    & > label {
      font-weight: bold;
    }

  }
`;

const DivBotoes = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export default class TelaUsuario extends react.Component {
  state = {
    name: "",
    email: "",
    newName: "",
    newEmail: "",
    edit: false,
  };

  componentDidMount() {
    this.getUserData();
  }

  getUserData = async () => {
    const id = this.props.id;
    try {
      const request = await axios.get(`${baseURL}/${id}`, config);
      const usuario = request.data;
      this.setState({
        name: usuario.name,
        email: usuario.email,
      });
    } catch (error) {
      console.log("Ocorreu um erro");
    }
  };

  changeContent = () => {
    if (!this.state.edit) {
      return (
        <Fragment>
          <p>
            <span>Name:</span> {this.state.name}
          </p>
          <p>
            <span>Email:</span> {this.state.email}
          </p>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <InputField
            name="Name"
            value={this.state.newName}
            onchange={this.handleName}
          />
          <InputField
            name="Email"
            value={this.state.newEmail}
            onchange={this.handleEmail}
          />
        </Fragment>
      );
    }
  };

  handleName = (event) => {
    this.setState({ newName: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ newEmail: event.target.value });
  };

  editUser = async () => {
    const body = {
      name: this.state.newName,
      email: this.state.newEmail,
    };
    const id = this.props.id;

    try {
      await axios.put(`${baseURL}/${id}`, body, config);
      alert("O usuario foi editado com sucesso");
      this.getUserData();
      this.setState({
        newName: '',
        newEmail: '',
      });
    } catch (error) {
      alert("Ocorreu um erro ao editar o usuario");
    }
  };

  handleEdit = () => {
    if (this.state.edit) {
      this.editUser();
      this.setState({ edit: false });
    } else {
      this.setState({ edit: true });
    }
  };

  render() {
    return (
      <TelaUsuarioDiv>
        <h1>Detalhes Usuario</h1>
        {this.changeContent()}
        <DivBotoes>
          <button onClick={(event) => this.props.deletar(this.props.id, event)}>
            Deletar
          </button>
          <button onClick={this.props.voltar}>Voltar</button>
          <button onClick={this.handleEdit}>
            {this.state.edit ? "Salvar" : "Editar"}
          </button>
        </DivBotoes>
      </TelaUsuarioDiv>
    );
  }
}
