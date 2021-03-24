import react from "react";
import styled, { createGlobalStyle } from "styled-components";
import CreateUserPage from "./componentes/CreateUserPage";
import UserListPage from "./componentes/UserListPage";
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

  paginaAtual = () => {
    switch (this.state.paginaAtual) {
      case "registro":
        return <CreateUserPage />;
      case "lista":
        return <UserListPage mostrarUsuario={this.mostrarUsuario}/>;
      case "usuario":
        return <UserDataPage id={this.state.idUsuario} voltar={this.voltarPraLista}/>;
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
