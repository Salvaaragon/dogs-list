import StatusInfo from '@Components/StatusInfo';
import { Grid, useTheme } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StatusGrid } from '../styles';

const StatusSelectRequired: React.FC = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();

  return (
    <StatusGrid container justify="center">
      <Grid item xs={12} sm={6}>
        <StatusInfo
          color={theme.palette.primary.dark}
          Icon={PetsIcon}
          text={i18n.t('home:required')}
        />
      </Grid>
    </StatusGrid>
  );
};

export default StatusSelectRequired;
