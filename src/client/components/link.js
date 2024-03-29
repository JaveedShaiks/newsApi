import React from 'react';

export const Links = ({ pageNo }) => {
  const prevLink = pageNo - 1;
  const nextLink = pageNo + 1;
  return (
    <div className="container">
      <div className="text-right links">
        <span
          data-testid="link-prev"
          className={prevLink < 1 ? 'disableLink' : ''}
        >
          <a href={prevLink.toString()}>Prev</a>{' '}
        </span>
        |{' '}
        <span
          data-testid="link-next"
          className={nextLink >= 50 ? 'disableLink' : ''}
        >
          <a href={nextLink.toString()}>Next</a>
        </span>
      </div>
    </div>
  );
};
