import CustomImage from '@Components/CustomImage';
import { RootState } from '@Store/reducers';
import React from 'react';
import { useSelector } from 'react-redux';
import { GalleryGrid, ImageGrid } from './styles';

const Gallery: React.FC = () => {
  const breedImages = useSelector(
    (state: RootState) => state.dogsReducer.breedImages,
  );

  return (
    <GalleryGrid>
      {breedImages.map((src: string) => (
        <ImageGrid key={src} onClick={() => window.open(src, '_blank')}>
          <CustomImage src={src} />
        </ImageGrid>
      ))}
    </GalleryGrid>
  );
};

export default Gallery;
