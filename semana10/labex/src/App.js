import React from "react";
import Router from './routes/Router'
import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`

function App() {
  return (
    <PageContainer>
      <Router />
    </PageContainer>
  );
}

export default App;
