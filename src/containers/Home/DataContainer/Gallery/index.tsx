import CustomImage from '@Components/CustomImage';
import { RootState } from '@Store/reducers';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CustomInfiniteScroll, GalleryGrid, ImageGrid } from './styles';

const LIMIT_PAGE_LENGTH = 10;

const Gallery = () => {
  const breedImages = useSelector(
    (state: RootState) => state.dogsReducer.breedImages,
  );
  const [currentIdx, setCurrentIdx] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const onClickImage = (src: string) => window.open(src, '_blank');

  const updateStatesWithNext = () => {
    setImages((images) =>
      images.concat(
        breedImages.slice(currentIdx, currentIdx + LIMIT_PAGE_LENGTH),
      ),
    );
    setCurrentIdx(currentIdx + LIMIT_PAGE_LENGTH);
  };

  const updateStatesWithLast = () => {
    setImages((images) =>
      images.concat(breedImages.slice(images.length - 1, breedImages.length)),
    );
    setCurrentIdx(breedImages.length);
  };

  const loadData = () => {
    breedImages.slice(currentIdx, currentIdx + LIMIT_PAGE_LENGTH).length > 0
      ? updateStatesWithNext()
      : updateStatesWithLast();
  };

  useEffect(() => {
    if (breedImages.length)
      setImages(breedImages.splice(currentIdx, LIMIT_PAGE_LENGTH));
  }, [breedImages]);

  return (
    <GalleryGrid id="gallery-grid">
      <CustomInfiniteScroll
        dataLength={images.length}
        next={loadData}
        hasMore={true}
        loader={false}
        scrollableTarget="gallery-grid"
      >
        {images.map((src: string) => (
          <ImageGrid key={src} onClick={() => onClickImage(src)}>
            <CustomImage src={src} />
          </ImageGrid>
        ))}
      </CustomInfiniteScroll>
    </GalleryGrid>
  );
};

export default React.memo(Gallery);
