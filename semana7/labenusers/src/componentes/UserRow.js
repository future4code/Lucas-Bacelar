import react from "react";
import styled from "styled-components";

const UsuarioDiv = styled.div`
  height: 35px;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  cursor: pointer;

  background-color: #F2F2F2;

  &:hover {
    background-color: #E0E0E0;
  }

  & > button {
    padding: 2px 6px;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 3px hsl(0, 100%, 70%);
    background: hsl(0, 100%, 70%);

    &:hover {
      background:  hsl(0, 100%, 60%);
    }
  }

`;

export default class InputForm extends react.Component {
  render() {
    return (
      <UsuarioDiv onClick={() => this.props.mostrarUsuario(this.props.id)}>
        <p>{this.props.nomeUsuario}</p>
        <button onClick={(event) => this.props.deletar(this.props.id, event)}>
          X
        </button>
      </UsuarioDiv>
    );
  }
}
