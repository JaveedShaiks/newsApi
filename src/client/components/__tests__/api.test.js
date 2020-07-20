import { getVotes, parseNewsData, hideNewsData } from '../../API/api';

global.__isServer__ = false;

const newsData = {
  title: 'C Programming Language – Brian Kernighan and Lex Fridman',
  url: 'https://www.youtube.com/watch?v=G1-wse8nsxY',
  author: 'jonbaer',
  points: 1,
  votes: 1,
  num_comments: 0,
  comments: 0,
  id: '23889348',
  objectID: '23889348',
};
const newsDataList = [
  {
    title: 'C Programming Language – Brian Kernighan and Lex Fridman',
    url: 'https://www.youtube.com/watch?v=G1-wse8nsxY',
    author: 'jonbaer',
    points: 1,
    votes: 1,
    num_comments: 0,
    comments: 0,
    id: '23889348',
    objectID: '23889348',
  },
  {
    title: 'some title',
    url: 'https://www.youtube.com/watch?v=G1-wse8nsxY',
    author: 'authorName',
    points: 1,
    votes: 1,
    num_comments: 0,
    comments: 0,
    id: '23889368',
    objectID: '23889368',
  },
];
describe('API Functions', () => {
  it('should return number of votes', () => {
    expect(getVotes(newsData)).toEqual(1);
  });

  it('should return parsed news data', () => {
    expect(parseNewsData([newsData])).toEqual([
      {
        id: '23889348',
        title: 'C Programming Language – Brian Kernighan and Lex Fridman',
        comments: 0,
        votes: 1,
        url: 'https://www.youtube.com/watch?v=G1-wse8nsxY',
        author: 'jonbaer',
      },
    ]);
  });

  it('should hide news data', () => {
    expect(hideNewsData(newsDataList, newsData)).toEqual([
      {
        title: 'some title',
        url: 'https://www.youtube.com/watch?v=G1-wse8nsxY',
        author: 'authorName',
        points: 1,
        votes: 1,
        num_comments: 0,
        comments: 0,
        id: '23889368',
        objectID: '23889368',
      },
    ]);
  });

  it('should hide news data', () => {
    expect(hideNewsData(newsDataList, newsData)).toEqual([
      {
        title: 'some title',
        url: 'https://www.youtube.com/watch?v=G1-wse8nsxY',
        author: 'authorName',
        points: 1,
        votes: 1,
        num_comments: 0,
        comments: 0,
        id: '23889368',
        objectID: '23889368',
      },
    ]);
  });
});
