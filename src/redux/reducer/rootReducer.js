import { combineReducers } from 'redux';
import newsReducer from './reducerNews';

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;
