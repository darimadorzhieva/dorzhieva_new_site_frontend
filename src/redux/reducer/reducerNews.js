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
      };
    case actionTypes.GET_NEWS_RECEIVED:
      return {
        ...state,
        fetching: false,
        news: action.payload,
      };
    case actionTypes.GET_NEWS_REJECTED:
      return {
        ...state,
        error: action.error,
      };
    default: return state;
  }
}
