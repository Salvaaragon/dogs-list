import i18n from '@Services/i18n/config';
import { changeLanguageFunction } from './types';

export const changeLanguage: changeLanguageFunction = (language: string) => {
  i18n.changeLanguage(language);
  i18n.language;
};
