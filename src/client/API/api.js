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
