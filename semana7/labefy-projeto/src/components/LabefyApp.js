import React from "react";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import * as Labefy from "../utils/Apis/Labefy";
import LibraryPage from "../Pages/LibraryPage";
import HomePage from "../Pages/HomePage";
import SearchPage from "../Pages/SearchPage"
import PlaylistDetail from "../Pages/PlaylistDetail";
import { baseURL, config } from "../utils/config";
import axios from "axios";

const AppContainer = styled.main`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 260px 1fr;
`;

const LoadingPage = styled.div`
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
    Labefy.getPlaylists().then((response) => {
      if (response) {
        this.setState({ playlistArray: response });
      }
    })
  };

  createPlaylistAux = async (newName) => {
    Labefy.createPlaylist(newName).then((response) => {
      if (response) {
        this.getPlaylistsAux();
      }
    });
  };

  getPlaylistTracks = async (id) => {
    try {
      const response = await axios.get(`${baseURL}/${id}/tracks`, config);
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
        return <SearchPage />;
      case "library":
        return (
          <LibraryPage
            playlistArray={this.state.playlistArray}
            page={this.state.page}
            fetchDetail={this.onClickPlaylistDetail}
            refresh={this.getPlaylistsAux}
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
      case "loading":
        return <LoadingPage>Loading...</LoadingPage>;
      default:
        return <div>Error</div>;
    }
  };

  onClickPlaylistDetail = async (id, name) => {
    this.setState({ page: "loading", playlistId: id, playlistName: name });
    await this.getPlaylistTracks(id);
    this.setState({ page: "playlist" });
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
          refresh={this.getPlaylistsAux}
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
