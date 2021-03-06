import { FETCHING_CHARS, FETCHED_CHARS, ERROR } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_CHARS:
      return Object.assign({}, state, { fetching: true });
    case FETCHED_CHARS:
      return Object.assign({}, state, {
        chars: state.chars.concat(action.payload),
        fetching: false,
        fetched: true
      });
    case ERROR:
      return null;
    default:
      return state;
  }
};
