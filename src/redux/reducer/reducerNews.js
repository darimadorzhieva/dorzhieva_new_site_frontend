import actionTypes from '../actions/actionTypes';

const initialState = {
  news: [],
  fetching: false,
  error: null,
};

export default function newsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_NEWS_REQUESTED:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case actionTypes.GET_NEWS_RECEIVED:
      return {
        ...state,
        fetching: false,
        news: action.payload,
        error: null,
      };
    case actionTypes.GET_NEWS_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default: return state;
  }
}
