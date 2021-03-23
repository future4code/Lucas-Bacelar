import axios from "axios";
import react from "react";
import styled from "styled-components";

const UsuarioDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
  align-items: flex-end;

  width: 100%;

  & > button {
    background: none;
    border: none;
    color: red;
  }
`;

export default class InputForm extends react.Component {
  
  deletarUsuario = (id, event) => {
    event.stopPropagation();
    if(window.confirm("Tem certeza que deseja deletar?")) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
        headers: {
          Authorization: 'lucas-bacelar-cruz'
        }
      }).then((response) => {
        alert("Deletado com sucesso!");
        this.props.atualizar(id)
      }).catch((error) => {
        alert("Ocorreu um erro ao deletar o usuário");
      })
    }
  }  

  render() {
    return (
      <UsuarioDiv onClick={() => this.props.mostrarUsuario(this.props.id)}>
        <p>{this.props.nomeUsuario}</p>
        <button onClick={(event) => this.deletarUsuario(this.props.id, event)}>X</button>
      </UsuarioDiv>
    );
  }
}
