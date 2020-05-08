require('dotenv').config();
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var bodyParser = require('body-parser');

const express = require('express');
const shrinkRay = require('shrink-ray-current');

let app = express();

const expressNunjucks = require('express-nunjucks');
const fs = require('fs');
const util = require('util');

const isDev = process.env.APP_ENV != 'production';
const path = require('path');

app.set('views', __dirname);

const PublicPath = process.env.NODE_ENV == 'production' ? './public' : './public-dev';

// compress all responses
app.use(shrinkRay());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(csrf({ cookie: true }));

app.use(express.static(PublicPath));
expressNunjucks(app, {
  watch: isDev,
  noCache: isDev,
});

const getHtml = () =>
  fs
    .readFileSync(path.join(__dirname, 'index.html'), 'utf8')
    .replace('{{{bundle_js}}}', '/bundle.js')
    .replace('{{{bundle_styling}}}', '/bundle.css');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, csrf-token, Authorization'
  );
  next();
});

app.get('*', (req, res) => {
  let htmlRaw = getHtml();
  let httpUri = 'https://';

  if (isDev) {
    httpUri = 'http://';
  }

  res.send(htmlRaw);
});

// Checking public folder
fs.access(PublicPath, fs.F_OK, (err) => {
  if (err) {
    console.log('Attention! Please run "npm run dev or yarn dev"');
    return;
  }
});

let runningPort = 3000;

if (process.env.APP_PORT) {
  runningPort = process.env.APP_PORT;
}

app.listen(runningPort, () => console.log('Qasir Admin Panel listening on port ' + runningPort + '! '));
