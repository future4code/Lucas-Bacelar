import React from "react";
import styled from "styled-components";
import { randomRGBA } from "../utils/randomColor";

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px black;

  &:hover {
    transform: translateY(-2px);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 6px black;
  }

  & > div {
    flex: 5;
    font-size: 4rem;
    background: ${(props) => props.color};
  }

  & > p {
    text-align: center;
    font-size: 2rem;
    flex: 1;
    word-break: break-all;
  }

  & > audio {
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

  render() {
    return (
      <CardContainer onClick={() => this.props.changeAudio(this.props.audio)} color={this.state.color}>
        <div>{this.props.index}</div>
        <p>{this.props.artist}</p>
        <p>{this.props.name}</p>
      </CardContainer>
    );
  }
}
