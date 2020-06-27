import { FETCH_NEWS, UPDATE_VOTE } from '../actions';

export const parseNewsData = (data) => {
  let newData = data.map((item) => {
    return {
      id: item.objectID,
      title: item.title,
      comments: item.num_comments,
      votes: item.points,
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
