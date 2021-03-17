import StatusInfo from '@Components/StatusInfo';
import { Grid, useTheme } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StatusGrid } from '../styles';

const StatusEmpty: React.FC = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();

  return (
    <StatusGrid container justify="center">
      <Grid item xs={12} sm={6}>
        <StatusInfo
          color={theme.palette.secondary.main}
          Icon={InfoIcon}
          text={i18n.t('home:empty')}
        />
      </Grid>
    </StatusGrid>
  );
};

export default StatusEmpty;
