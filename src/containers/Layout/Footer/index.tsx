import Copyright from '@Components/Copyright';
import Social from '@Components/Social';
import { Container, Divider, Grid } from '@material-ui/core';
import React from 'react';
import { FooterGrid } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterGrid container>
      <Container maxWidth="lg">
        <Social />
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Copyright />
      </Container>
    </FooterGrid>
  );
};

export default Footer;
