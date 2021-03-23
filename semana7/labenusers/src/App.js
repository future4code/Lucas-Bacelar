import react from "react";
import styled, { createGlobalStyle } from "styled-components";
import TelaRegistro from "./componentes/TelaRegistro";
import TelaLista from "./componentes/TelaLista";
import TelaUsuario from "./componentes/TelaUsuario";

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
    paginaAtual: "usuario",
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
        return <TelaRegistro />;
      case "lista":
        return <TelaLista mostrarUsuario={this.mostrarUsuario} />;
      case "usuario":
        return <TelaUsuario id={this.state.idUsuario} />;
      default:
        break;
    }
  };

  mostrarUsuario = (id) => {
    this.setState({ idUsuario: id }, () => {
      this.setState({ paginaAtual: "usuario" });
    });
  };

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
