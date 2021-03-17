import StatusInfo from '@Components/StatusInfo';
import { Grid, useTheme } from '@material-ui/core';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StatusGrid } from '../styles';

const StatusLoading: React.FC = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();

  return (
    <StatusGrid container justify="center">
      <Grid item xs={12} sm={6}>
        <StatusInfo
          color={theme.palette.secondary.main}
          Icon={HourglassEmptyIcon}
          text={i18n.t('home:loading')}
        />
      </Grid>
    </StatusGrid>
  );
};

export default StatusLoading;
