import CustomText from '@Components/CustomText';
import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CopyrightInfoGrid } from './styles';

const Copyright: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Grid item xs={12} container justify="center">
      <Box paddingY="2rem">
        <Grid item container justify="center">
          <Grid>
            <CustomText
              color="white"
              fontSize="0.75rem"
              text={i18n.t('footer:copyright-title')}
            />
          </Grid>
          <CopyrightInfoGrid>
            <CustomText
              color="white"
              fontSize="0.75rem"
              text={i18n.t('footer:copyright-info')}
            />
          </CopyrightInfoGrid>
        </Grid>
        <Grid item container justify="center">
          <CustomText
            alignment="center"
            color="white"
            fontSize="0.75rem"
            text={i18n.t('footer:author')}
          />
        </Grid>
      </Box>
    </Grid>
  );
};

export default Copyright;
