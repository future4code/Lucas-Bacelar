import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import LabefyApp from './components/LabefyApp'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: lightgrey;
  }

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  button {
    box-sizing: content-box;
  }
`

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <LabefyApp />
      </div>
    );
  }
}

