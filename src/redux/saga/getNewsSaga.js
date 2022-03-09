import {
  takeEvery,
  put,
} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import api from '../../api/api';

function* getPostSaga() {
  try {
    const { data: payload } = yield api.get('/news');
    yield put({ type: actionTypes.GET_NEWS_RECEIVED, payload });
  } catch (err) {
    yield put({ type: actionTypes.GET_NEWS_REJECTED, error: err.message });
  }
}
export default function* watcherSaga() {
  yield takeEvery(actionTypes.GET_NEWS_REQUESTED, getPostSaga);
}
