import React from 'react';

export const Links = ({ pageNo }) => {
  const prevLink = pageNo - 1;
  const NextLink = pageNo + 1;
  return (
    <div className="container">
      <div>
        <span className={prevLink < 1 ? 'disableLink' : ''}>
          <a href={prevLink}>Prev</a>{' '}
        </span>
        |{' '}
        <span className={prevLink >= 50 ? 'disableLink' : ''}>
          <a href={NextLink}>Next</a>
        </span>
      </div>
    </div>
  );
};
