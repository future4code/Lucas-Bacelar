import styled from 'styled-components';
import Router from 'routes/Router';

const PageContainer = styled.div`
  background: var(--page-background);
  min-height: 100vh;
`;

function App() {
  return (
    <PageContainer>
      <Router />
    </PageContainer>
  );
}

export default App;
