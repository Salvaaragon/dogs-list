import { Theme } from '@material-ui/core';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import InfoIcon from '@material-ui/icons/Info';
import PetsIcon from '@material-ui/icons/Pets';
import WarningIcon from '@material-ui/icons/Warning';
import { i18n } from 'i18next';
import { StatusType } from './types';

export const getColorByType = (type: StatusType, theme: Theme) => {
  if (type === 'Error') return theme.palette.error.main;
  if (type === 'EmptySelect') return theme.palette.primary.dark;

  return theme.palette.secondary.main;
};

export const getIconByType = (type: StatusType) => {
  switch (type) {
    case 'EmptyResult':
      return InfoIcon;
    case 'EmptySelect':
      return PetsIcon;
    case 'Loading':
      return HourglassEmptyIcon;
    case 'Error':
      return WarningIcon;
    default:
      return InfoIcon;
  }
};

export const getTextByType = (type: StatusType, i18n: i18n) => {
  switch (type) {
    case 'EmptyResult':
      return i18n.t('home:empty');
    case 'EmptySelect':
      return i18n.t('home:required');
    case 'Loading':
      return i18n.t('home:loading');
    case 'Error':
      return i18n.t('home:error');
    default:
      return i18n.t('home:empty');
  }
};
