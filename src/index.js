import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './renderer/server';
import createStore from './renderer/store';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore(req);
  let path = req.path;
  let pageNumber = path.length >= 2 ? parseInt(path.slice(1)) : 1;
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store, pageNumber) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

const port = process.env.PORT || 4048;

app.listen(port, () => {
  console.log('server running on port 4048');
});
