import EnglandFlag from '@Assets/icons/flags/en.svg';
import SpanishFlag from '@Assets/icons/flags/es.svg';
import IconButton from '@Components/IconButton';
import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { changeLanguage } from './logic';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.title = i18n.t('header:title');
  }, [i18n.language]);

  return (
    <Grid container justify="flex-end">
      <IconButton
        onClick={() => changeLanguage('es')}
        ariaLabel="es"
        iconAlt="spanish"
        iconSrc={SpanishFlag}
        iconWidth="1.5rem"
        disabled={i18n.language === 'es'}
      />
      <IconButton
        onClick={() => changeLanguage('en')}
        ariaLabel="en"
        iconAlt="english"
        iconSrc={EnglandFlag}
        iconWidth="1.5rem"
        disabled={i18n.language === 'en'}
      />
    </Grid>
  );
};

export default withTranslation()(LanguageSelector);
