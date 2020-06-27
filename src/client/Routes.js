import React from 'react';
import App from './App';
import NewsList from './pages/NewsList';

export default [
  {
    ...App,
    routes: [
      {
        ...NewsList,
        path: '/:id',
        exact: true,
      },
      {
        ...NewsList,
        path: '/',
        exact: true,
      },
    ],
  },
];
