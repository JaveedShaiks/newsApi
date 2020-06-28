import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import pageReducer from './pageReducer';

export default combineReducers({
  newsList: newsReducer,
  pageNumber: pageReducer,
});
