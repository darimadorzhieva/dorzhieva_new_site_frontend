import { combineReducers } from 'redux';
import postReducer from './reducerNews';

const rootReducer = combineReducers({
  posts: postReducer,
});
export default rootReducer;
