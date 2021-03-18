import CustomText from '@Components/CustomText';
import React from 'react';
import { IconGrid, StatusInfoGrid, TextGrid } from './styles';
import { StatusInfoProps } from './types';

const StatusInfo: React.FC<StatusInfoProps> = (props: StatusInfoProps) => {
  const { color, Icon, text } = props;

  return (
    <StatusInfoGrid container justify="center" color={color}>
      <IconGrid container item xs={12} sm={8} justify="center">
        <Icon style={{ color: color, fontSize: '2rem' }} />
      </IconGrid>
      <TextGrid container item xs={12} sm={8} justify="center">
        <CustomText
          alignment="center"
          text={text}
          color={color}
          fontSize="2rem"
        />
      </TextGrid>
    </StatusInfoGrid>
  );
};

export default StatusInfo;
