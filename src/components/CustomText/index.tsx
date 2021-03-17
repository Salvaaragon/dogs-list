import React from 'react';
import { loadTextColor } from './logic';
import { CustomTypography } from './styles';
import { CustomTextProps } from './types';

const CustomText: React.FC<CustomTextProps> = (props: CustomTextProps) => {
  const { alignment, color, fontFamily, fontSize } = props;
  const { fontStyle, fontWeight, letterSpacing, lineHeight, text } = props;

  return (
    <CustomTypography
      align={alignment}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      lineheight={lineHeight}
      {...loadTextColor(color ? color : 'primary')}
    >
      {text}
    </CustomTypography>
  );
};

CustomText.defaultProps = {
  alignment: 'right',
  color: 'primary',
  fontFamily: 'Raleway',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 'normal',
  letterSpacing: '0',
  lineHeight: '1.5rem',
};

export default CustomText;
