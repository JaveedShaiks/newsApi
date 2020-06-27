import React, { useState, useEffect } from 'react';

import { parseNewsData } from '../Api/api';

export const NewsWrapperComponent = () => {
  const [newsList, setNews] = useState([]);

  const fetchPosts = () => {
    fetch('https://hn.algolia.com/api/v1/search?page=1')
      .then((response) => response.json())
      .then((data) => setNews(parseNewsData(data.hits)));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(newsList);

  const renderedNewsList = newsList.map((news) => {
    return (
      <li key={news.id} className="list-group-item">
        <div className="row">
          <div className="col-2 col-sm-2 col-lg-1">{news.comments}</div>
          <div className="col-2 col-sm-2 col-lg-1">{news.votes}</div>
          <div className="col-2 col-sm-2 col-lg-1">^</div>
          <div className="col-6 col-sm-6 col-lg-9">{news.title}</div>
        </div>
      </li>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-2 col-sm-2 col-lg-1">Comments</div>
        <div className="col-2 col-sm-2 col-lg-1">Vote Count</div>
        <div className="col-2 col-sm-2 col-lg-1">UpVote</div>
        <div className="col-6 col-sm-6 col-lg-9">News Details</div>
      </div>
      <ul className="list-group list-group-flush">{renderedNewsList}</ul>
    </div>
  );
};
