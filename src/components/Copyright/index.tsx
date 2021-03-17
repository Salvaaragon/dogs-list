import CustomText from '@Components/CustomText';
import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Copyright: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Grid item xs={12} container justify="center">
      <Box paddingY="2rem">
        <Grid item container justify="center">
          <CustomText
            color="white"
            fontSize="0.75rem"
            text={i18n.t('footer:copyright')}
          />
        </Grid>
        <Grid item container justify="center">
          <CustomText
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
