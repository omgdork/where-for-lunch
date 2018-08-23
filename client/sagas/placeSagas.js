import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceIds, getPlaceDetails } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACE,
  FETCH_PLACES,
} from 'actions/placeActionTypes';

function* fetchPlace(action) {
  try {
    const places = yield call(getPlaceIds, action.payload);
    const randomPlace = getRandom(places);
    yield put(placeActions.setDetails(randomPlace));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
}

function* fetchPlaceDetails(action) {
  try {
    const place = yield call(getPlaceDetails, action.payload);
    yield put(placeActions.setDetails(place));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* placeDetailsSaga() {
  yield takeEvery(FETCH_PLACE, fetchPlaceDetails);
}

export default [
  placeSagas,
  placeDetailsSaga,
];
