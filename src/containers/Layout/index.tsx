import { Container } from '@material-ui/core';
import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
};

export default Layout;
