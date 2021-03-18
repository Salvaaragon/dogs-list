import StatusInfo from '@Components/StatusInfo';
import { Grid, useTheme } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { getColorByType, getIconByType, getTextByType } from './logic';
import { StatusGrid } from './styles';
import { CurrentStatusProps } from './types';

const CurrentStatus: React.FC<CurrentStatusProps> = (
  props: CurrentStatusProps,
) => {
  const { type } = props;
  const { i18n } = useTranslation();
  const theme = useTheme();

  return (
    <StatusGrid container justify="center">
      <Grid item xs={12} sm={6}>
        <StatusInfo
          color={getColorByType(type, theme)}
          Icon={getIconByType(type)}
          text={getTextByType(type, i18n)}
        />
      </Grid>
    </StatusGrid>
  );
};

export default CurrentStatus;
