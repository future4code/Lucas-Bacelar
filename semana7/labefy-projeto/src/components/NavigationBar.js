import React from "react";
import styled from "styled-components";
import PlaylistItem from "./PlaylistItem";
import PlaylistCreateForm from "./PlaylistCreateForm";

const NavigationContainer = styled.section`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;

  & > ul > li {
    cursor: pointer;
  }
`;

export default class NavigationBar extends React.Component {
  state = {
    isCreating: false,
    newPlaylistName: "",
  };

  createPlaylistAux = async () => {
    await this.props.createPlaylist(this.state.newPlaylistName);
    this.setState({ isCreating: false, newPlaylistName: "" });
  }

  handleIsCreating = () => {
    this.setState({ isCreating: !this.state.isCreating });
  };

  handlePlaylistName = (event) => {
    this.setState({ newPlaylistName: event.target.value });
  };

  render() {
    const createForm = () => {
      return (
        <PlaylistCreateForm
          value={this.state.newPlaylistName}
          onchange={this.handlePlaylistName}
          create={this.createPlaylistAux}
        />
      );
    };

    const playlistItems = this.props.playlistsArray.map((item) => {
      return <PlaylistItem name={item.name} id={item.id} fetchDetail={this.props.fetchDetail}/>;
    }).reverse();

    return (
      <NavigationContainer>
        <h1>Labefy</h1>
        <ul onClick={this.props.changepage}>
          <li data-name="home">Inicio</li>
          <li data-name="search">Buscar</li>
          <li data-name="library">Sua biblioteca</li>
        </ul>
        <h2>Playlists</h2>
        <button onClick={this.handleIsCreating}>NovaPlaylist</button>
        {this.state.isCreating ? createForm() : <div></div>}
        <ul>{playlistItems}</ul>
      </NavigationContainer>
    );
  }
}
