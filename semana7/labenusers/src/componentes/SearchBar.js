import react from "react";
import styled from "styled-components";

const SearchBarDiv = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  height: 25px;

  & input {
    flex: 5;
    margin-right: 10px;
  }

  & > button {
    padding: 0 10px;
    font-weight: bold;
    flex: 1;
  }
`

export default class SearchBar extends react.Component {
  render() {
    return (
      <SearchBarDiv>
        <input 
        value={this.props.value} 
        onChange={this.props.onchange}
        placeholder="Procure algum nome"
        ></input>
        <button onClick={this.props.search}>Buscar</button>
      </SearchBarDiv>
    );
  }
}
