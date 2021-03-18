import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { LayoutContainer } from './styles';

const Layout: React.FC = () => {
  return (
    <LayoutContainer maxWidth={false} disableGutters>
      <Header />
      <Content />
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
