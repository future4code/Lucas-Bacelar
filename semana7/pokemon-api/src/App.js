import axios from 'axios'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PokemonCard from './components/PokemonCard'
import { baseURL } from './utils/config'

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
  background-color: #F2F2F2;
  font-size: 16px;
  min-height: 100vh;

  display: grid;
  grid-template-rows: 100px 1fr;
`

const Header = styled.header`
  background-color: black;
  color: white;
  text-align: center;
`
const Main = styled.main`
  padding: 40px 100px;
  display: grid;
  background: white;

  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 350px;
  grid-column-gap: 15px;
  grid-row-gap: 20px;
  ;
`

export default class App extends React.Component {
  state = {
    pokemonList: [],
  }

  componentDidMount() {
    this.fetchPokemonList();
  }

  fetchPokemonList = async () => {
    try {
      const request = await axios.get(`${baseURL}pokemon?limit=10`);
      const pokemonArray = request.data.results;
      pokemonArray.forEach((pokemon) => {
        this.fetchPokemonData(pokemon.url)
      })
    } catch (error) {
      console.log(error);
    }
  }

  fetchPokemonData = async (pokeURL) => {
    try {
      const pokemon = await axios.get(pokeURL);
      const {name, types, sprites, id} = pokemon.data;
      const typesArray = types.map((slot) => {
        return slot.type.name;
      })
      console.log(sprites);
      const newPokemon = {
        name: name ,
        types: typesArray,
        id: id,
        sprite: sprites.front_default,
      }
      this.setState({ pokemonList: [...this.state.pokemonList, newPokemon]});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const pokemonCards = this.state.pokemonList.sort((a, b) => {
      return a.id - b.id;
    }).map((pokemon) => {
      return (
        <PokemonCard 
          name={pokemon.name}
          types={pokemon.types}
          id={pokemon.id}
          sprite={pokemon.sprite}
        />)
    })
    return (
      <BodyContainer>
        <GlobalStyle />
        <Header><h1>Kanto Pokemons</h1></Header>
        <Main>{pokemonCards}</Main>
      </BodyContainer>
    );
  }
}