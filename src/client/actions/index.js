export const FETCH_NEWS = 'fetch_news';

export const fetchNews = (pageNumber) => async (dispatch, getState, api) => {
  const res = await api.get(`/search_by_date?tags=story&page=${pageNumber}`);

  dispatch({
    type: FETCH_NEWS,
    payload: res,
  });
};

export const UPDATE_VOTE = 'update_Vote';
export const updateVote = (data) => (dispatch, getState, api) => {
  console.log('updateData:', data);
  dispatch({
    type: UPDATE_VOTE,
    payload: data,
  });
};
