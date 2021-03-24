import react from "react";
import axios from "axios";
import { baseURL, config } from "./utils/configs";
import styled, { createGlobalStyle } from "styled-components";
import CreateUserPage from "./componentes/CreateUserPage";
import ShowUsersPage from "./componentes/ShowUsersPage";
import UserDataPage from "./componentes/UserDataPage";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  button {
    cursor: pointer;
    box-sizing: content-box;
  }
`;

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  max-height: 100vh;
  overflow: auto;

  background: linear-gradient(to bottom right, #4E8AE6, #4C88E8);

  & > button {
    margin: 10px;
    padding: 2px 10px;
  }
`;

export default class App extends react.Component {
  state = {
    paginaAtual: "registro",
    idUsuario: "",
  };

  mudarPagina = () => {
    switch (this.state.paginaAtual) {
      case "registro":
        this.setState({ paginaAtual: "lista" });
        break;
      case "lista":
        this.setState({ paginaAtual: "registro" });
        break;
      default:
        break;
    }
  };

  deleteUser = async (id, event) => {
    event.stopPropagation();
    if (window.confirm("Tem certeza que deseja deletar?")) {
      try {
        await axios.delete(`${baseURL}/${id}`, config);
        alert("Deletado com sucesso!");
        this.props.atualizar();
      } catch (error) {
        alert("Ocorreu um erro ao deletar o usuário");
      }
    }
  };

  paginaAtual = () => {
    switch (this.state.paginaAtual) {
      case "registro":
        return <CreateUserPage />;
      case "lista":
        return <ShowUsersPage mostrarUsuario={this.mostrarUsuario} deletar={this.deleteUser}/>;
      case "usuario":
        return <UserDataPage id={this.state.idUsuario} voltar={this.voltarPraLista} deletar={this.deleteUser}/>;
      default:
        break;
    }
  };

  mostrarUsuario = (id) => {
    this.setState({ idUsuario: id }, () => {
      this.setState({ paginaAtual: "usuario" });
    });
  };

  voltarPraLista = () => {
    this.setState({ paginaAtual: 'lista'})
  }

  render() {
    return (
      <PageContainer>
        <GlobalStyle />
        {this.state.paginaAtual === "usuario" ? (
          <div></div>
        ) : (
          <button onClick={this.mudarPagina}>
            {this.state.paginaAtual === "registro"
              ? "Ir para página de lista"
              : "Ir para página de registro"}
          </button>
        )}
        {this.paginaAtual()}
      </PageContainer>
    );
  }
}
