import React from "react";
import styled from "styled-components";
import PlaylistCard from "../components/PlaylistCard";

const LibraryPageContainer = styled.article`
  background: #101010;
  color: rgba(255, 255, 255, 0.8);
  font-size: 4rem;
  display: grid;
  padding-top: 100px;
    justify-content: center;
`;

export default class LibraryPage extends React.Component {
  render() {
    return (
      <LibraryPageContainer>
          Em construção....
      </LibraryPageContainer>
    );
  }
}
