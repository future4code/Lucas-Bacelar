import React from "react";
import styled from "styled-components";
import { randomRGBA } from "../utils/randomColor";
import axios from "axios";
import { baseURL, config } from "../utils/config";
import trashIcon from "../icons/trash.jpg";

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
    flex: 3;
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
    font-size: 2rem;
    flex: 1;
  }
`;

export default class PlaylistCard extends React.Component {
  state = {
    color: "",
  };

  componentDidMount() {
    this.setState({ color: randomRGBA() });
  }

  deletePlaylist = async (event) => {
    event.stopPropagation();
    if (window.confirm("Você deseja excluir essa playlist?")) {
        console.log(this.props.id);
      try {
        await axios.delete(`${baseURL}/${this.props.id}`, config);
        await this.props.refresh();
        window.alert("Excluido com sucesso")
      } catch (error) {
        window.alert("Não foi possivel excluir a playlist");
      }
    }
  };

  render() {
    return (
      <CardContainer
        onClick={() => this.props.fetchDetail(this.props.id, this.props.name)}
        color={this.state.color}
      >
        <div>
          {this.props.index}
          <div onClick={this.deletePlaylist}>
            <img alt="trash bin icon" src={trashIcon} />
          </div>
        </div>
        <p>{this.props.name}</p>
      </CardContainer>
    );
  }
}
