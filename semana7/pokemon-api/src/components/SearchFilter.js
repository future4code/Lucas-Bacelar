import React from "react";
import styled from "styled-components";

const typeColors = {
    fire: "#EE8130",
    grass: "#7AC74C",
    water: "#6390F0",
    bug: "#A6B91A",
    normal: "#A8A77A",
    flying: "#A98FF3",
    fighting: "#C22E28",
    ghost: "#735797",
    ground: "#E2BF65",
    ice: "#96D9D6",
    poison: "#A33EA1",
    psychic: "#F95587",
    rock: "#B6A136",
    dragon: "#6F35FC",
    electric: "#F7D02C",
    fairy: "#D685AD",
  };

const SearchBarContainer = styled.div`
  background-color: #cdcdb1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0;
  width: 100%;

  & > input {
    padding: 5px;
    height: 25px;
    flex-basis: 330px;
    border-radius: 6px;
    outline: none;
    border: none;
    box-shadow: 0 0 1px gray;
    margin: 2px;
    align-self: center;
  }

  & > select {
    padding: 5px;
  }
`;

export default class SearchFilter extends React.Component {
  render() {
    const types = ['nenhum', ...Object.keys(typeColors)] 
    const optionTypes = types.map((type) => {
      return <option value={type}>{type}</option>;
    });

    return (
      <div>
        <SearchBarContainer>
          <input type="text" value={this.props.name} onChange={this.props.onchangeName} placeholder="Procure algum pokemon" />
          <select value={this.props.type} onChange={this.props.onchangeType}>
            <option selected disabled>
              Tipos
            </option>
            {optionTypes}
          </select>
        </SearchBarContainer>
      </div>
    );
  }
}
