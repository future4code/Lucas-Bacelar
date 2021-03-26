import axios from "axios";
import React from "react";
import { baseURL } from "./utils/config";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./components/PokemonCard";
import SearchFilter from "./components/SearchFilter";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

const BodyContainer = styled.div`
  font-size: 16px;
  min-height: 100vh;

  display: grid;
  grid-template-rows: 100px auto 1fr;
`;

const Header = styled.header`
  background: #896b7c;
  color: #8b8b5f;
  text-align: center;
  text-shadow: 0 0 10px black;
  line-height: 100px;
`;
const Main = styled.main`
  padding: 1vw;
  display: grid;
  background: #cdcdb1;
  justify-content: center;

  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  grid-auto-rows: 350px;
  grid-column-gap: 15px;
  grid-row-gap: 20px; ;
`;

export default class App extends React.Component {
  state = {
    pokemonList: [],
    nameQuery: "",
    typeQuery: "nenhum",
  };

  componentDidMount() {
    this.fetchPokemonList();
  }

  fetchPokemonList = async () => {
    try {
      const request = await axios.get(`${baseURL}pokemon?limit=151`);
      const pokemonArray = request.data.results;
      pokemonArray.forEach((pokemon) => {
        this.fetchPokemonData(pokemon.url);
      });
    } catch (error) {
      console.log(error);
    }
  };

  fetchPokemonData = async (pokeURL) => {
    try {
      const pokemon = await axios.get(pokeURL);
      const { name, types, sprites, id } = pokemon.data;
      const typesArray = types.map((slot) => {
        return slot.type.name;
      });
      console.log(sprites);
      const newPokemon = {
        name: name,
        types: typesArray,
        id: id,
        sprite: sprites.front_default,
      };
      this.setState({ pokemonList: [...this.state.pokemonList, newPokemon] });
    } catch (error) {
      console.log(error);
    }
  };

  handleName = (event) => {
    this.setState({ nameQuery: event.target.value });
  };

  handleType = (event) => {
    this.setState({ typeQuery: event.target.value });
  };

  render() {
    const filteredList = this.state.pokemonList
      .filter((pokemon) => {
        return pokemon.name.includes(this.state.nameQuery.toLowerCase());
      })
      .filter((pokemon) => {
        if (this.state.typeQuery !== "nenhum") {
          return pokemon.types.includes(this.state.typeQuery);
        }
        return true;
      });

    const pokemonCards = filteredList
      .sort((a, b) => {
        return a.id - b.id;
      })
      .map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            types={pokemon.types}
            id={pokemon.id}
            sprite={pokemon.sprite}
          />
        );
      });
    return (
      <BodyContainer>
        <GlobalStyle />
        <Header>
          <h1>Kanto Pokemons</h1>
        </Header>
        <SearchFilter
          name={this.state.nameQuery}
          onchangeName={this.handleName}
          type={this.state.typeQuery}
          onchangeType={this.handleType}
        />
        <Main>{pokemonCards}</Main>
      </BodyContainer>
    );
  }
}
