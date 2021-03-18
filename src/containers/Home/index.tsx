import { Container } from '@material-ui/core';
import React from 'react';
import BreedSelector from './BreedSelector';
import DataContainer from './DataContainer';

const Home: React.FC = () => {
  return (
    <Container disableGutters>
      <BreedSelector />
      <DataContainer />
    </Container>
  );
};

export default Home;
