import React, {useState} from "react";
import styled, {createGlobalStyle} from "styled-components";
import Home from "./pages/Home";
import Header from "./components/Layout/Header"
import MatchList from "./pages/MatchList"

const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: #CCCCCC;
  }

  button {
    box-sizing: content-box;
  }
`

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  width: 500px;
  display: grid;
  grid-template-rows: 100px 650px;
  border-radius: 12px;
  border: 1px solid #CCCCCC;

  background: white;
`

function App() {
  const [pagina, setPagina] = useState('matchs');

  const showPage = () => {
    switch(pagina) {
      case 'home':
        return <Home />
      case 'matchs':
        return <MatchList />
      default:
        return <Home />
    }
  }

  const changePage = () => {
    if(pagina === 'home') {
      setPagina('matchs');
    } else {
      setPagina('home');
    }
  }

  return (
    <PageContainer>
      <GlobalStyle />
      <Card>
        <Header changepage={changePage}/>
        {showPage()}
      </Card>
    </PageContainer>
  );
}

export default App;
