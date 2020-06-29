import find from 'lodash/find';
import filter from 'lodash/filter';

export const storeVoteData = (data) => {
  let savedNewsData = getLocalStorageData() ? getLocalStorageData() : [];
  if (savedNewsData.length) {
    savedNewsData = savedNewsData.filter((item) => item.id != data.id);
    savedNewsData.push(data);
  } else {
    savedNewsData.push(data);
  }
  localStorage.setItem('newsList', JSON.stringify(savedNewsData));
};

export const getLocalStorageData = () =>
  localStorage.getItem('newsList')
    ? JSON.parse(localStorage.getItem('newsList'))
    : null;

export const getMatchedNews = (newsData) => {
  let storedNews = null;
  if (getLocalStorageData()) {
    storedNews = find(getLocalStorageData(), ['id', newsData.objectID]);
  }
  return storedNews;
};

export const getVotes = (item) => {
  let matchedNews = getMatchedNews(item);
  return matchedNews ? matchedNews.votes : item.points;
};
export const getMatchedAndHiddenNews = (newsData) => {
  let hiddenNews = null;
  if (getLocalStorageData()) {
    hiddenNews = find(getLocalStorageData(), {
      id: newsData.objectID,
      display: false,
    });
  }
  return hiddenNews;
};

export const filterHiddenNews = (currentStateNews) => {
  return filter(currentStateNews, function (news) {
    let newstoRemove = getMatchedAndHiddenNews(news);
    return newstoRemove ? news.id === newstoRemove.id : news;
  });
};

export const parseNewsData = (data) => {
  let stateNews = data;
  if (!__isServer__) {
    stateNews = filterHiddenNews(stateNews);
  }
  let newData = stateNews.map((item) => {
    return {
      id: item.objectID,
      title: item.title,
      comments: item.num_comments,
      votes: __isServer__ ? item.points : getVotes(item),
      url: item.url,
      author: item.author,
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

export const hideNewsData = (news, data) =>
  news.filter((item) => item.id != data.id);
