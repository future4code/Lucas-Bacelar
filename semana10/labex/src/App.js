import React from 'react';
import Router from './routes/Router';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';
import 'normalize.css';
import logo from './imgs/logo.png';
import background from './imgs/bckg-home.jpg';

const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    vertical-align: baseline;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const PageContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 80px minmax(800px, 1fr) 100px;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  padding: 6px 8px;
  align-items: center;
  gap: 20px;
  color: white;
  background-color: #192060;
  opacity: 0.71;

  h1 {
    font-size: 2.75rem;
    font-weight: 300;

    span {
      color: #b099f2;
      font-weight: 500;
    }
  }
`;

const Main = styled.main`
  background: url(${background}) no-repeat;
  background-size: cover;

  & > * {
    width: 100%;
    height: 100%;
  }
`;
const Footer = styled.footer`
  background-color: #192060;
  opacity: 0.71;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Header>
          <img src={logo} alt="labex logo with geometric forms" />
          <h1>
            Labe<span>X</span>
          </h1>
        </Header>
        <Main>
          <Router />
        </Main>
        <Footer></Footer>
      </PageContainer>
    </>
  );
}

export default App;
