import { getAllBreeds, GetAllBreedsResponseType } from '@Services/api';
import { fetchAllBreedsDone, fetchAllBreedsError } from '@Store/actions/dogs';
import { FETCH_ALL_BREEDS } from '@Store/constants/dogs';
import { normalizeBreedList } from '@Utils/normalizeBreedList';
import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchAllBreeds() {
  try {
    const response: GetAllBreedsResponseType = yield call(getAllBreeds);
    yield put(fetchAllBreedsDone(normalizeBreedList(response.data.message)));
  } catch (error) {
    yield put(fetchAllBreedsError());
  }
}

export default function* () {
  yield takeLatest(FETCH_ALL_BREEDS, fetchAllBreeds);
}
