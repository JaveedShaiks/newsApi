import { FETCH_NEWS, UPDATE_VOTE } from '../actions';
import { getLocalStorageData } from '../API/api';

export const getVotes = (item) => {
  let matchedNewsId = null;
  if (getLocalStorageData()) {
    matchedNewsId = getLocalStorageData().find(
      (savedNews) => savedNews.id === item.objectID
    );
  }
  return matchedNewsId ? matchedNewsId.votes : item.points;
};

export const parseNewsData = (data) => {
  let newData = data.map((item) => {
    return {
      id: item.objectID,
      title: item.title,
      comments: item.num_comments,
      votes: __isServer__ ? item.points : getVotes(item),
      display: false,
    };
  });
  return newData;
};

export const updateNewsData = (news, data) => {
  let updatedData = news.map((item) => {
    if (item.id === data.id) {
      item.votes = item.votes + 1;
      return item;
    } else {
      return item;
    }
  });
  return updatedData;
};

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return parseNewsData(action.payload.data.hits);
    case UPDATE_VOTE:
      return updateNewsData(state, action.payload);
    default:
      return state;
  }
};
