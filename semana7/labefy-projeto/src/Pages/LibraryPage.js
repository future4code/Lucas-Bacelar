import React from "react";
import styled from "styled-components";
import PlaylistCard from "../components/PlaylistCard";

const LibraryContainer = styled.article`
  background: #101010;
  color: rgba(255, 255, 255, 0.8);
  display: grid;
  grid-template-rows: auto 1fr;

  & > h1 {
    color: black;
    background: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 3rem;
  }

  & > div {
    padding: 2vw;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-auto-rows: 350px;
    grid-gap: 30px;

    & > h2 {
      grid-column: 1/-1;
      font-size: 2rem;
      justify-self: center;
    }
  }
`;

export default class LibraryPage extends React.Component {
  render() {
    const playlistCards = this.props.playlistArray.map((playlist, index) => {
      return (
        <PlaylistCard
          index={index}
          name={playlist.name}
          id={playlist.id}
          fetchDetail={this.props.fetchDetail}
          key={playlist.id}
          refresh={this.props.refresh}
        />
      );
    });

    return (
      <LibraryContainer>
        <h1>Playlist</h1>
        <div>
          {playlistCards.length === 0 ? (
            <h2>Você deseja adicionar alguma playlist?</h2>
          ) : (
            playlistCards
          )}
        </div>
      </LibraryContainer>
    );
  }
}
