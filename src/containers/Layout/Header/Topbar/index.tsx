import CustomText from '@Components/CustomText';
import LanguageSelector from '@Containers/LanguageSelector';
import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CustomToolbar } from './styles';

const Topbar: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Container maxWidth="lg">
      <CustomToolbar disableGutters>
        <Grid container item xs={10}>
          <CustomText text={i18n.t('header:title')} color="primary" />
        </Grid>
        <Grid container item xs={2}>
          <LanguageSelector />
        </Grid>
      </CustomToolbar>
    </Container>
  );
};

export default Topbar;
