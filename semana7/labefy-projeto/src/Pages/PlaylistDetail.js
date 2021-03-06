import React, { Fragment } from "react";
import styled from "styled-components";
import TrackCard from "../components/TrackCard";
import axios from "axios";
import { baseURL, config } from "../utils/config";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const PlaylistContainer = styled.article`
  background: #121212;
  color: rgba(255, 255, 255, 0.8);
  display: grid;
  grid-template-rows: auto 50px auto 1fr;
  position: relative;

  & > h1 {
    text-transform: capitalize;
    text-align: center;
    font-size: 3rem;
    color: black;
    background: rgba(255, 255, 255, 0.5);
  }

  & > button {
    background: rgba(255, 255, 255, 0.8);
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
  grid-auto-rows: minmax(350px, auto);
  grid-gap: 30px;

  margin-bottom: 512px;

  & > h2 {
    grid-column: 1/-1;
    justify-self: center;
    font-size: 2rem;
  }
`;

const AudioPlayerContainer = styled.div`
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: center;

  background: rgba(0, 0, 0, 0.4);
  height: 70px;
  left: 0;
  bottom: 0;

  & > * {
    margin-top: -30px;
    opacity: 0.8;
  }
`;

export default class PlaylistDetail extends React.Component {
  state = {
    isCreating: false,
    music: "",
    artist: "",
    url: "",
    audioSrc: "",
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

  handleAudioSrc = (audio) => {
    this.setState({ audioSrc: audio });
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
          key={track.id}
          artist={track.artist}
          id={track.id}
          name={track.name}
          changeAudio={this.handleAudioSrc}
          playlistId={this.props.id}
          refresh={this.props.refresh}
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
        <PlaylistTracksDiv>
          {playlistTracks.length === 0 ? (
            <h2>Você deseja adicionar alguma musica?</h2>
          ) : (
            playlistTracks
          )}{" "}
        </PlaylistTracksDiv>
        <AudioPlayerContainer>
          <AudioPlayer src={this.state.audioSrc} controls />
        </AudioPlayerContainer>
      </PlaylistContainer>
    );
  }
}
