import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
`;

const Layout = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </MainContainer>
  );
};

export default Layout; 