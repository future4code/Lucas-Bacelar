import React from "react";
import styled from "styled-components";
import axios from "axios"
import { randomRGBA } from "../utils/randomColor";
import trashIcon from "../icons/trash.jpg"
import {config, baseURL} from "../utils/config"

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 4px white;

  &:hover {
    transform: translateY(-2px);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 6px white;
  }

  & > div {
    flex: 5;
    font-size: 4rem;
    background: ${(props) => props.color};
    position: relative;

    & > div {
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 50px;
      display: flex;
      border: 1px solid black;

      &:active {
        top: -5px;
      }
    }
  }

  & > p {
    background: rgba(255, 255, 255, 0.8);
    color: black;
    text-align: center;
    flex: 1;
    word-break: break-all;

    &:first-of-type {
      font-weight: bold;
      font-size: 2rem;
    }

    &:last-of-type {
      font-size: 1.75rem;
    }
  }
`;

export default class PlaylistCard extends React.Component {
  state = {
    color: "",
    audio: "",
  };

  componentDidMount() {
    const trackNumber = Math.round(Math.random() * 100);
    this.setState({ color: randomRGBA() });
    this.setState({ audio: `http://spoti4.future4.com.br/${trackNumber}.mp3` })
  }

  deleteTrack = async (event) => {
    event.stopPropagation();
    if(window.confirm("Voce deseja excluir essa musica?")) {
      try {
        await axios.delete(`${baseURL}/${this.props.playlistId}/tracks/${this.props.id}`, config);
        window.alert("Excluido com sucesso!");
        this.props.refresh(this.props.playlistId)
      } catch(error) {
        window.alert("Nao conseguimos excluir a musica");
      }
    }
  }

  render() {
    return (
      <CardContainer onClick={() => this.props.changeAudio(this.state.audio)} color={this.state.color}>
        <div>
          {this.props.index}
          <div onClick={this.deleteTrack}>
            <img alt="trash bin icon" src={trashIcon}/>
          </div>  
        </div>
        <p>{this.props.artist}</p>
        <p>{this.props.name}</p>
      </CardContainer>
    );
  }
}
