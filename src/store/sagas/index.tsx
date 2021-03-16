import { all } from 'redux-saga/effects';
import fetchAllBreeds from './dogs/fetchAllBreeds';
import fetchBreedImages from './dogs/fetchBreedImages';

export default function* rootSaga() {
  yield all([fetchAllBreeds(), fetchBreedImages()]);
}
