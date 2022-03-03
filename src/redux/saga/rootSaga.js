import { all, call } from 'redux-saga/effects';
import getPostSaga from './getNewsSaga';

export default function* rootSaga() {
  yield all([
    call(getPostSaga),
  ]);
}
