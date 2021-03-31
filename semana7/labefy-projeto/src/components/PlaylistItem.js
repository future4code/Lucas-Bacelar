import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseURL, config } from "../utils/config";
import trashIcon from "../icons/trash.jpg";

const PlaylistContainer = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;

  & > div {
    width: 30px;
    height: 30px;
    display: flex;
    border: 1px solid white;
    

    &:active {
      border: 1px solid red;
    }
  }
`;

export default class PlaylistItem extends React.Component {

  deletePlaylist = async (event) => {
    event.stopPropagation();
    if (window.confirm("Você deseja excluir essa playlist?")) {
      console.log(this.props.id);
      try {
        await axios.delete(`${baseURL}/${this.props.id}`, config);
        await this.props.refresh();
        window.alert("Excluido com sucesso");
      } catch (error) {
        window.alert("Não foi possivel excluir a playlist");
      }
    }
  };

  render() {
    return (
      <PlaylistContainer>
        <p
          onClick={() => this.props.fetchDetail(this.props.id, this.props.name)}
        >
          {this.props.name}
        </p>
        <div onClick={this.deletePlaylist}>
          <img alt="trash bin icon" src={trashIcon} />
        </div>
      </PlaylistContainer>
    );
  }
}
