import {
  takeEvery,
  put,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import api from '../../api/api';

function* getPostSaga() {
  try {
    const { data: payload } = yield api.get('/news');
    yield put({ type: actionTypes.NEWS_RECEIVED, payload });
  } catch (err) {
    yield put({ type: actionTypes.NEWS_REJECTED, error: err.message });
  }
}
export default function* watcherSaga() {
  yield takeEvery(actionTypes.NEWS_REQUESTED, getPostSaga);
}
