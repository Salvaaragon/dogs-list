import { Container } from '@material-ui/core';
import React from 'react';
import { ContentContainer } from './styles';

const Content: React.FC = () => {
  return (
    <ContentContainer maxWidth={false}>
      <Container maxWidth="lg">Content</Container>
    </ContentContainer>
  );
};

export default Content;
