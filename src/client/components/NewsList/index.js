import React from 'react';

export const NewsWrapperComponent = ({ newsList = [], updateVoteCount }) => {
  const renderedNewsList = newsList.map((news) => {
    return (
      <li key={news.id} className="list-group-item">
        <div className="row">
          <div className="col-2 col-sm-2 col-lg-1">{news.comments}</div>
          <div className="col-2 col-sm-2 col-lg-1">{news.votes}</div>
          <div
            className="col-2 col-sm-2 col-lg-1"
            onClick={() => updateVoteCount(news)}
          >
            ^
          </div>
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
