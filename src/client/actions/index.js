export const FETCH_NEWS = 'fetch_news';
export const SAVE_PAGE = 'save_page';

export const fetchNews = (pageNumber) => async (dispatch, getState, api) => {
  dispatch({
    type: SAVE_PAGE,
    payload: pageNumber,
  });
  const res = await api.get(`/search_by_date?tags=story&page=${pageNumber}`);

  dispatch({
    type: FETCH_NEWS,
    payload: res,
  });
};

export const UPDATE_VOTE = 'update_Vote';
export const updateVote = (data) => (dispatch, getState, api) => {
  dispatch({
    type: UPDATE_VOTE,
    payload: data,
  });
};

export const HIDE_NEWS = 'hide_news';
export const hideNews = (data) => (dispatch, getState, api) => {
  dispatch({
    type: HIDE_NEWS,
    payload: data,
  });
};
