import axios from "axios";
import react from "react";
import styled from "styled-components";
import RegistroUsuario from "./registroUsuario";
import InputField from "./InputField"
import { Fragment } from "react";

const RegistrosDiv = styled.div`
  margin: 100px auto;
  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > h2 {
    margin-bottom: 30px;
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
    valorBusca: '',
  };

  componentDidMount() {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "lucas-bacelar-cruz",
        },
      }
    );
    request
      .then((response) => {
        this.setState({ listaRegistros: response.data });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({ error: true });
      });
  }

  atualizarLista = (id) => {
    const listaNova = this.state.listaRegistros.filter((usuario) => {
      console.log("usuario", usuario);
      console.log("usuario id", usuario.id);
      console.log("id", id);
      return !(usuario.id === id)
    })

    this.setState({listaRegistros: listaNova})
  }

  procurarUsuario = () => {
    const nome = this.state.valorBusca;
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${nome}`, {
      headers: {
        Authorization: 'lucas-bacelar-cruz'
      }
    }).then((response) => {
      this.setState({listaRegistros: response.data})
    }).catch((error) => {
      console.log("Ocorreu um erro ao buscar");
    })
  }
  
  onChangeBusca = (event) => {
    this.setState({valorBusca: event.target.value})
  }

  render() {
    const usuariosDaLista = this.state.listaRegistros.map((usuario) => {
      return <RegistroUsuario 
      id ={usuario.id} 
      nomeUsuario = {usuario.name} 
      atualizar = {this.atualizarLista}
      mostrarUsuario = {this.props.mostrarUsuario}
      />;
    });

    let mensagem;

    if (this.state.error) {
      mensagem = <MensagemErro>Ocorreu um erro</MensagemErro>;
    } else {
      mensagem = usuariosDaLista;
    }

    return (
      <Fragment>
        <RegistrosDiv>
          <InputField 
            nome="Busca"
            valor={this.state.valorBusca}
            onchange={this.onChangeBusca}
          />
          <button onClick={this.procurarUsuario}>Buscar</button>
          <h2>Usuários Cadastrados</h2>
          {mensagem}
        </RegistrosDiv>
  
      </Fragment>
    );
  }
}
