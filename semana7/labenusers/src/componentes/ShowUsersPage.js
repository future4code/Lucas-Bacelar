import axios from "axios";
import react from "react";
import styled from "styled-components";
import { baseURL, config } from "../utils/configs";
import UserRow from "./UserRow";
import SearchBar from "./SearchBar"
import { Fragment } from "react";

const RegistrosDiv = styled.div`
  margin: 100px auto;
  padding: 15px 20px;
  border-radius: 8px;
  width: 350px;
  background: #FFFFFF;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > h2 {
    margin-bottom: 25px;
  }
`;

const MensagemErro = styled.h1`
  color: rgb(255, 102, 102);
  font-weight: bold;
`;

export default class InputForm extends react.Component {
  state = {
    listaRegistros: [],
    error: false,
    searchValue: "",
  };

  componentDidMount() {
    this.queryUserList();
  }

  queryUserList = async () => {
    try {
      const request = await axios.get(baseURL, config);
      this.setState({ listaRegistros: request.data });
    } catch {
      this.setState({ error: true });
    }
  };

  findUser = async () => {
    const name = this.state.searchValue;
    try {
      const request = await axios.get(`${baseURL}/search?name=${name}`, config);
      this.setState({ listaRegistros: request.data });
    } catch (error) {
      alert("Ocorreu um erro ao buscar");
    }
  };

  handlesearchValue = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    const usuariosDaLista = this.state.listaRegistros.map((usuario) => {
      return (
        <UserRow
          id={usuario.id}
          nomeUsuario={usuario.name}
          atualizar={this.queryUserList}
          mostrarUsuario={this.props.mostrarUsuario}
          deletar={this.props.deletar}
        />
      );
    });

    return (
        <RegistrosDiv>
          <h2>Usuários Cadastrados</h2>
          <SearchBar
              value={this.state.searchValue}
              onchange={this.handlesearchValue}
              search={this.findUser}
            />

          {this.state.error === true ? (
            <MensagemErro>Ocorreu um erro</MensagemErro>
          ) : (
            <Fragment>{usuariosDaLista}</Fragment>
          )}
        </RegistrosDiv>
    );
  }
}
