import { Links } from '../link';
import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

let pageNo = 1;

test('Render link component', () => {
  const div = document.createElement('div');
  render(<Links pageNo={1} />, div);
});

describe('Links component', () => {
  beforeAll(() => {
    pageNo = 1;
  });
  beforeEach(() => {
    render(<Links pageNo={pageNo} />);
  });

  it('should display the prev text', () => {
    const prevLink = screen.queryAllByTestId('link-prev');
    expect(prevLink.map((link) => link.firstChild.textContent)).toEqual([
      'Prev',
    ]);
  });
  it('should display the next text', () => {
    const nextLink = screen.queryAllByTestId('link-next');
    expect(nextLink.map((link) => link.firstChild.textContent)).toEqual([
      'Next',
    ]);
  });
  it('should display the prev disabled class', () => {
    const prevLink = screen.queryAllByTestId('link-prev');
    expect(prevLink.map((link) => link)[0]).toHaveClass('disableLink');
  });
});
