import react from "react";
import styled from "styled-components";

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class InputField extends react.Component {
  render() {
    return (
      <InputDiv>
          <label>{this.props.name}</label>
          <input onChange={this.props.onchange} value={this.props.value}></input>
      </InputDiv>
    );
  }
}
