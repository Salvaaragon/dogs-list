import { getBreedImages, GetBreedImagesResponseType } from '@Services/api';
import { ReduxAction } from '@Store/actions';
import {
  fetchBreedImagesDone,
  fetchBreedImagesError,
} from '@Store/actions/dogs';
import { FETCH_BREED_IMAGES } from '@Store/constants/dogs';
import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchBreedImages(action: ReduxAction) {
  try {
    const response: GetBreedImagesResponseType = yield call(
      getBreedImages,
      action.payload,
    );

    if (response.data) yield put(fetchBreedImagesDone(response.data.message));
    else yield put(fetchBreedImagesDone([]));
  } catch (error) {
    yield put(fetchBreedImagesError());
  }
}

export default function* () {
  yield takeLatest(FETCH_BREED_IMAGES, fetchBreedImages);
}
