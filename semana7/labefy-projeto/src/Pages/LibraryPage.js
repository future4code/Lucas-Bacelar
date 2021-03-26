import React, { Fragment } from "react";
import styled from "styled-components";
import PlaylistCard from "../components/PlaylistCard";

const LibraryContainer = styled.article`
  background: lightblue;
  display: grid;
  grid-template-rows: auto 1fr;

  & > h1 {
    background: lightgray;
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
  }
`;

export default class LibraryPage extends React.Component {
  render() {
    const playlistCards = this.props.playlistArray.map((playlist, index) => {
      return <PlaylistCard index={index} name={playlist.name} id={playlist.id} fetchDetail={this.props.fetchDetail} key={playlist.id}/>;
    });

    return (
      <LibraryContainer>
        {this.props.page === "library" ? (
          <Fragment>
            {" "}
            <h1>Playlist</h1>
            <div>{playlistCards}</div>
          </Fragment>
        ) : (
          <div></div>
        )}
      </LibraryContainer>
    );
  }
}
