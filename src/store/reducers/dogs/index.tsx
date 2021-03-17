import { ReduxAction } from '@Store/actions';
import {
  FETCH_ALL_BREEDS,
  FETCH_ALL_BREEDS_DONE,
  FETCH_ALL_BREEDS_ERROR,
  FETCH_BREED_IMAGES,
  FETCH_BREED_IMAGES_DONE,
  FETCH_BREED_IMAGES_ERROR,
  SELECT_BREED,
} from '@Store/constants/dogs';

export interface DogsState {
  breeds: string[];
  breedImages: string[];
  breedSelected: string;
  isFetching: boolean;
  isFailed: boolean;
}

const initialState: DogsState = {
  breeds: [],
  breedImages: [],
  breedSelected: '',
  isFetching: false,
  isFailed: false,
};

export const DogsReducer = (
  state: DogsState = initialState,
  action: ReduxAction,
): DogsState => {
  switch (action.type) {
    case FETCH_ALL_BREEDS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ALL_BREEDS_DONE:
      return {
        ...state,
        isFetching: false,
        isFailed: false,
        breeds: action.payload,
      };
    case FETCH_ALL_BREEDS_ERROR:
      return {
        ...state,
        isFetching: false,
        isFailed: true,
      };
    case FETCH_BREED_IMAGES:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_BREED_IMAGES_DONE:
      return {
        ...state,
        isFetching: false,
        isFailed: false,
        breedImages: action.payload,
      };
    case FETCH_BREED_IMAGES_ERROR:
      return {
        ...state,
        isFetching: false,
        isFailed: true,
      };
    case SELECT_BREED:
      return {
        ...state,
        breedSelected: action.payload,
      };

    default:
      return state;
  }
};
