import * as actionTypes from '../actions/actionTypes';

const initialState = {
  content: [],
  fetching: false,
  error: null,
};
export default function postsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.NEWS_REQUESTED:
      return {
        ...state,
        fetching: true,
        content: [],
        error: null,
      };
    case actionTypes.NEWS_RECEIVED:
      return {
        ...state,
        fetching: false,
        content: action.payload,
        error: null,
      };
    case actionTypes.NEWS_REJECTED:
      return {
        ...state,
        fetching: false,
        content: [],
        error: action.error,
      };
    default: return state;
  }
}