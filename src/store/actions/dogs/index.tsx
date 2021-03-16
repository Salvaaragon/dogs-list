import {
  FETCH_ALL_BREEDS,
  FETCH_ALL_BREEDS_DONE,
  FETCH_ALL_BREEDS_ERROR,
  FETCH_BREED_IMAGES,
  FETCH_BREED_IMAGES_DONE,
  FETCH_BREED_IMAGES_ERROR,
} from '@Store/constants/dogs';
import { ReduxAction } from '..';

export const fetchAllBreeds = (): ReduxAction => {
  return {
    type: FETCH_ALL_BREEDS,
  };
};

export const fetchAllBreedsDone = (breeds: string[]): ReduxAction => {
  return {
    type: FETCH_ALL_BREEDS_DONE,
    payload: breeds,
  };
};

export const fetchAllBreedsError = (): ReduxAction => {
  return {
    type: FETCH_ALL_BREEDS_ERROR,
  };
};

export const fetchBreedImages = (breed: string): ReduxAction => {
  return {
    type: FETCH_BREED_IMAGES,
    payload: breed,
  };
};

export const fetchBreedImagesDone = (imagesSrc: string[]): ReduxAction => {
  return {
    type: FETCH_BREED_IMAGES_DONE,
    payload: imagesSrc,
  };
};

export const fetchBreedImagesError = (): ReduxAction => {
  return {
    type: FETCH_BREED_IMAGES_ERROR,
  };
};
