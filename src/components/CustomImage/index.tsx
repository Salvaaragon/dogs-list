import React from 'react';
import { Img } from './styles';
import { CustomImageProps } from './types';

const CustomImage: React.FC<CustomImageProps> = (props: CustomImageProps) => {
  const { src } = props;

  return <Img key={src} src={src} />;
};

export default CustomImage;
