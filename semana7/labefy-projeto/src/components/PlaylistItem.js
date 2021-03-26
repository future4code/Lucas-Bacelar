import React from "react";
import styled from "styled-components";

const PlaylistContainer = styled.li`
    display: flex;
`

export default class PlaylistItem extends React.Component {
  render() {
    return (
      <PlaylistContainer>
          <p onClick={() => this.props.fetchDetail(this.props.id, this.props.name)}>{this.props.name}</p>
      </PlaylistContainer>
    );
  }
}
