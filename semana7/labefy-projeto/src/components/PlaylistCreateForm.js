import React from "react";
import styled from "styled-components";

const CreateForm = styled.section``;

export default class PlaylistCreateForm extends React.Component {
  render() {
    return (
      <CreateForm>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.onchange}
        ></input>
        <button onClick={this.props.create}>Criar</button>
      </CreateForm>
    );
  }
}
