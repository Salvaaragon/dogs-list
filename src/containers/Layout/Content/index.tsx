import { Container } from '@material-ui/core';
import Router from '@Router';
import React from 'react';
import { ContentContainer } from './styles';

const Content: React.FC = () => {
  return (
    <ContentContainer maxWidth={false}>
      <Container maxWidth="lg">
        <Router />
      </Container>
    </ContentContainer>
  );
};

export default Content;
