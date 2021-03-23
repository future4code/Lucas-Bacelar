import react, { Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import InputField from "./InputField";

const TelaUsuarioDiv = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 300px;

  display: flex;
  flex-direction: column;
  background: lightgrey;

  & > h1 {
    text-align: center;
    background-color: grey;
    margin-bottom: 40px;
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
`;

const DivBotoes = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export default class TelaUsuario extends react.Component {
  state = {
    nome: "",
    email: "",
    novoNome: "",
    novoEmail: "",
    editando: false,
  };

  componentDidMount() {
    const id = this.props.id;
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "lucas-bacelar-cruz",
          },
        }
      )
      .then((response) => {
        const usuario = response.data;
        this.setState({
          nome: usuario.name,
          email: usuario.email,
        });
      })
      .catch((error) => {
        console.log("Ocorreu um erro");
      });
  }

  deletarUsuario = (id, event) => {
    event.stopPropagation();
    if (window.confirm("Tem certeza que deseja deletar?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {
              Authorization: "lucas-bacelar-cruz",
            },
          }
        )
        .then((response) => {
          alert("Deletado com sucesso!");
          this.props.atualizar(id);
        })
        .catch((error) => {
          alert("Ocorreu um erro ao deletar o usuário");
        });
    }
  };

  mudarConteudo = () => {
    if (!this.state.editando) {
      return (
        <Fragment>
          <p>
            <span>Nome:</span> {this.state.nome}
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
            nome="Nome"
            valor={this.state.novoNome}
            onchange={this.onChangeNome}
          />
          <InputField
            nome="Email"
            valor={this.state.novoEmail}
            onchange={this.onChangeEmail}
          />
        </Fragment>
      );
    }
  };

  onChangeNome = (event) => {
    this.setState({ novoNome: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ novoEmail: event.target.value });
  };

  enviarEdicao = () => {
        const body = {
            name: this.state.novoNome,
            email: this.state.novoEmail,
        }

      const id = this.props.id;
      axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, body, {
          headers: {
              Authorization: 'lucas-bacelar-cruz'
          }
      }).then((response) => {
        alert("O usuario foi editado com sucesso");
        this.setState({
            nome: this.state.novoNome,
            email: this.state.novoEmail,
        })
      }).catch((error) => {
        alert("Ocorreu um erro ao editar o usuario");
      })
  }

  editarDados = () => {
    if (this.state.editando) {
      this.enviarEdicao();
      this.setState({
        editando: false,
      });
    } else {
      this.setState({ editando: true });
    }
  };

  render() {
    return (
      <TelaUsuarioDiv>
        <h1>Detalhes Usuario</h1>
        {this.mudarConteudo()}
        <DivBotoes>
          <button
            onClick={(event) => this.deletarUsuario(this.props.id, event)}
          >
            Deletar
          </button>
          <button onClick={this.props.voltar}>Voltar</button>
          <button onClick={this.editarDados}>
            {this.state.editando ? "Salvar" : "Editar"}
          </button>
        </DivBotoes>
      </TelaUsuarioDiv>
    );
  }
}
