import styled from 'styled-components';
import { Header } from 'components/layout/index';
import Router from 'routes/Router';

const PageContainer = styled.div`
  background: var(--page-background);
  min-height: 100vh;
`;

function App() {
  return (
    <PageContainer>
      <Header />
      <Router />
    </PageContainer>
  );
}

export default App;
