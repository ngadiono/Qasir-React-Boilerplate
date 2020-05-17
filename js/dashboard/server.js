const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const port = process.env.NEXT_PUBLIC_APP_PORT ? process.env.NEXT_PUBLIC_APP_PORT : 3000;

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    if (dev) {
      console.log(`> Dev Application Ready on http://localhost:${port} => HAPPY CODING :D`);
    } else {
      console.log(`> Application is already running`);
    }
  });
});
