import React from "react";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import * as api from "../utils/api";
import LibraryPage from "../Pages/LibraryPage";
import HomePage from "../Pages/HomePage";
import PlaylistDetail from "../Pages/PlaylistDetail";
import { baseURL, config } from "../utils/config";
import axios from "axios";

const AppContainer = styled.main`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 260px 1fr;
`;

export default class App extends React.Component {
  state = {
    page: "home",
    playlistArray: [],
    playlistTracks: [],
  };

  componentDidMount() {
    this.getPlaylistsAux();
  }

  getPlaylistsAux = async () => {
    api.getPlaylists().then((response) => {
      if (response) {
        this.setState({ playlistArray: response });
      }
    });
  };

  createPlaylistAux = async (newName) => {
    api.createPlaylist(newName).then((response) => {
      if (response) {
        this.getPlaylistsAux();
      }
    });
  };

  getPlaylistTracks = async (id) => {
    try {
      const response = await axios.get(`${baseURL}/${id}/tracks`, config);
      console.log(response.data.result.tracks);
      this.setState({ playlistTracks: response.data.result.tracks });
    } catch (error) {
      console.log(error);
    }
  };

  showPage = () => {
    switch (this.state.page) {
      case "home":
        return <HomePage>Home</HomePage>;
      case "search":
        return <div>Search</div>;
      case "library":
        return (
          <LibraryPage
            playlistArray={this.state.playlistArray}
            page={this.state.page}
            fetchDetail={this.onClickPlaylistDetail}
          />
        );
      case "playlist":
        return (
          <PlaylistDetail
            id={this.state.playlistId}
            name={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            refresh={this.getPlaylistTracks}
          />
        );
      default:
        return <div>Error</div>;
    }
  };

  onClickPlaylistDetail = async (id, name) => {
    this.setState({ page: "playlist", playlistId: id, playlistName: name });
    this.getPlaylistTracks(id);
  };

  onClickChangePage = (event) => {
    event.stopPropagation();
    if (event.target.nodeName === "LI") {
      this.setState({ page: event.target.dataset.name });
    }
  };

  render() {
    return (
      <AppContainer>
        <NavigationBar
          changepage={this.onClickChangePage}
          playlistsArray={this.state.playlistArray}
          createPlaylist={this.createPlaylistAux}
          fetchDetail={this.onClickPlaylistDetail}
        />
        {this.showPage()}
      </AppContainer>
    );
  }
}
