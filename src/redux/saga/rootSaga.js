import { all } from 'redux-saga/effects';
import getNews from './getNewsSaga';

export default function* rootSaga() {
  yield all([
    getNews(),
  ]);
}
