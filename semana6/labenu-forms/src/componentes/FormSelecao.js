import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  margin: 0 auto;
  width: 40%;
  display: flex;
  flex-direction: column;

  & > label {
    margin-bottom: 17px;
  }

  & > select {
      font-size: 13px;
  }
`;

export default class FormTexto extends React.Component {
  state = {
    valorSelect: {value: 'dog'},
  };

  selectHandleChange = (event) => {
    this.setState({ valorSelect: event.target.value });
  };

  render() {
    let lista;
    if(!lista) {
        lista = this.props.opcoes.map((opcao) => {
            return <option value={opcao}>{opcao}</option>
        })
    }

    return (
      <SelectContainer>
        <label>{this.props.pergunta}</label>
        <select value={this.state.valorSelect} onChange={this.selectHandleChange}>
          {lista}
        </select>
      </SelectContainer>
    );
  }
}
