import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  const html = `
   <html>
   <head>
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
   <link rel="stylesheet" href="styles.css" >
   </head>
   <body>
   <div id='root'>${content}</div>
   <script src="bundle.js"></script>
   </body>

   </html>
    `;

  res.send(html);
});

const port = process.env.PORT || 4048;

app.listen(port, () => {
  console.log('server running on port 4048');
});
