import {
  ColorType,
  LoadTextColorFunction,
  TypographyColors,
  TypographyColorType,
} from './types';

export const isTypographyColor = (
  color: string,
): color is TypographyColorType => {
  return color in TypographyColors;
};

export const loadTextColor: LoadTextColorFunction = (color: ColorType) => {
  if (isTypographyColor(color)) return color;
  else return { customcolor: color };
};
