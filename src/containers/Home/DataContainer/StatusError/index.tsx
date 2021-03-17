import StatusInfo from '@Components/StatusInfo';
import { Grid, useTheme } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StatusGrid } from '../styles';

const StatusError: React.FC = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();

  return (
    <StatusGrid container justify="center">
      <Grid item xs={12} sm={6}>
        <StatusInfo
          color={theme.palette.error.main}
          Icon={WarningIcon}
          text={i18n.t('home:error')}
        />
      </Grid>
    </StatusGrid>
  );
};

export default StatusError;
