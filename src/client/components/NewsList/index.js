import React from 'react';

export const NewsWrapperComponent = ({
  newsList = [],
  updateVoteCount,
  hideNews,
}) => {
  const renderedNewsList = newsList.map((news) => {
    return (
      <li key={news.id} className="list-group-item pb-1 pt-1">
        <div className="row">
          <div className="col-2 col-sm-2 col-lg-1 pl-1 pr-1 text-center">
            {news.comments}
          </div>
          <div className="col-2 col-sm-2 col-lg-1 pl-1 pr-1 text-center">
            {news.votes}
          </div>
          <div
            className="col-2 col-sm-2 col-lg-1 pl-1 pr-1 text-center"
            onClick={() => updateVoteCount(news)}
          >
            <div className="triangle-up cursor"></div>
          </div>
          <div className="col-6 col-sm-6 col-lg-9 pl-1 pr-1">
            <div className="contentTitle">
              <a href={news.url} target="_blank">
                {news.title}
              </a>
            </div>
            <div className="contentInfo">
              <span> By {news.author}</span> | [
              <span className="cursor" onClick={() => hideNews(news)}>
                Hide
              </span>
              ]
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="container">
      <ul className="list-group striped-list">
        <li className="list-group-item activeBg pb-1 pt-1">
          <div className="row">
            <div className="col-2 col-sm-2 col-lg-1 pl-1 pr-1 text-center">
              Comments
            </div>
            <div className="col-2 col-sm-2 col-lg-1 pl-1 pr-1 text-center">
              Vote Count
            </div>
            <div className="col-2 col-sm-2 col-lg-1 pl-1 pr-1 text-center">
              UpVote
            </div>
            <div className="col-6 col-sm-6 col-lg-9 pl-1 pr-1">
              News Details
            </div>
          </div>
        </li>
        {renderedNewsList}
      </ul>
    </div>
  );
};
