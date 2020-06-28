import { FETCH_NEWS, UPDATE_VOTE, HIDE_NEWS } from '../actions';
import { parseNewsData, updateNewsData, hideNewsData } from '../API/api';
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return parseNewsData(action.payload.data.hits);
    case UPDATE_VOTE:
      return updateNewsData(state, action.payload);
    case HIDE_NEWS:
      return hideNewsData(state, action.payload);
    default:
      return state;
  }
};
