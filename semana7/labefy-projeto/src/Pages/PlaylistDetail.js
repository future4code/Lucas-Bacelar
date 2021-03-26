import React, { Fragment } from "react";
import styled from "styled-components";
import TrackCard from "../components/TrackCard";
import axios from "axios";
import { baseURL, config } from "../utils/config";

const PlaylistContainer = styled.article`
  display: grid;
  grid-template-rows: auto 50px auto 1fr;

  & > h1 {
    text-transform: capitalize;
    text-align: center;
    font-size: 3rem;
    background-color: black;
    color: white;
  }
`;

const CreateForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: 5px;
  }
  width: 300px;
  margin: 0 auto;
  background: gray;
`;

const PlaylistTracksDiv = styled.div`
  padding: 2vw;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 350px;
  grid-gap: 30px;
`;

export default class PlaylistDetail extends React.Component {
  state = {
    isCreating: false,
    music: "",
    artist: "",
    url: "",
  };

  handleIsCreating = () => {
    this.setState({ isCreating: !this.state.isCreating });
  };

  handleMusic = (event) => {
    this.setState({ music: event.target.value });
  };

  handleArtist = (event) => {
    this.setState({ artist: event.target.value });
  };

  handleURL = (event) => {
    this.setState({ url: event.target.value });
  };

  random_rgba = () => {
    let o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  };

  createPlaylistTrack = async () => {
    const body = {
      name: this.state.music,
      artist: this.state.artist,
      url: this.state.url,
    };
    try {
      await axios.post(`${baseURL}/${this.props.id}/tracks`, body, config);
      this.setState({ isCreating: !this.state.isCreating });
      this.props.refresh(this.props.id);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const playlistTracks = this.props.playlistTracks.map((track) => {
      return (
        <TrackCard
        color={"blue"}
          key={track.id}
          artist={track.artist}
          id={track.id}
          name={track.name}
          url={track.url}
        />
      );
    });

    const createInput = () => {
      return (
        <CreateForm>
          <input
            value={this.state.music}
            onChange={this.handleMusic}
            placeholder="O nome da musica"
          ></input>
          <input
            value={this.state.artist}
            onChange={this.handleArtist}
            placeholder="O nome do artista"
          ></input>
          <input
            value={this.state.url}
            onChange={this.handleURL}
            placeholder="o link para a musica"
          ></input>
          <button onClick={this.createPlaylistTrack}>Criar</button>
        </CreateForm>
      );
    };

    return (
      <PlaylistContainer>
        <h1>{this.props.name}</h1>
        <button onClick={this.handleIsCreating}>Adicionar Musica</button>
        {this.state.isCreating ? createInput() : <Fragment></Fragment>}
        <PlaylistTracksDiv>{playlistTracks}</PlaylistTracksDiv>
      </PlaylistContainer>
    );
  }
}
