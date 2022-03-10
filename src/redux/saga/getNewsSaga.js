import { takeLatest, put } from 'redux-saga/effects';

import actionTypes from '../actions/actionTypes';
import api from '../../api';

function* getNews() {
  try {
    const { data: payload } = yield api.get('/news');
    yield put({ type: actionTypes.GET_NEWS_RECEIVED, payload });
  } catch (error) {
    yield put({ type: actionTypes.GET_NEWS_REJECTED, error: error.message });
  }
}

export default function* watcherGetNews() {
  yield takeLatest(actionTypes.GET_NEWS_REQUESTED, getNews);
}
