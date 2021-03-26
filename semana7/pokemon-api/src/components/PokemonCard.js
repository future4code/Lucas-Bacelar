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

const TypeItem = styled.span`
  box-sizing: content-box;
  border: 1px solid black;
  padding: 5px 5px;
  margin-right: 12px;
  border-radius: 6px;
  min-width: 40px;

  font-size: 1.05em;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
  background-color: ${props => props.color}
`;

const CardDiv = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 3px gray;
  position: relative;
  background: rgba(255, 255, 255, 0.6);

  &::before {
    content: "${(props) => `#${props.pokeId}` || ""}";
    font-weight: bold;
    font-size: 1.25em;
    z-index: 1;
    color: rgba(0, 0, 0, 0.4);
    text-shadow: 0px 0px 2px lightgray;

    position: absolute;
    top: 3px;
    right: 10px;
  }

  & > img {
    background: #c3c3a2;
    height: 250px;
    position: relative;
  }
`;

const TypesDiv = styled.section`
  display: flex;
`;

const InfoDiv = styled.section`
  padding: 0 20px;
  margin-top: 10px;

  & > * {
    margin: 10px 0;
  }

  & > p:first-of-type {
    margin-top: -7px;
    font-size: 1.75em;
    text-transform: capitalize;
  }

  & > p:nth-child(2) {
    font-family: sans-serif;
    font-style: italic;
    font-size: 1.25em;
  }
`;

export default class PokemonCard extends React.Component {
  render() {
    const typesList = this.props.types.map((type) => {
      return <TypeItem color={typeColors.[type]}>{type}</TypeItem>;
    });
    return (
      <CardDiv pokeId={this.props.id}>
        <img src={this.props.sprite} alt={this.props.name} />
        <InfoDiv>
          <p>{this.props.name}</p>
          <TypesDiv>{typesList}</TypesDiv>
        </InfoDiv>
      </CardDiv>
    );
  }
}
