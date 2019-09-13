require('dotenv').config()
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var bodyParser = require('body-parser');
const axios = require('axios');

const express = require('express');
let app = express();
const expressNunjucks = require('express-nunjucks');
const fs = require('fs');
const util = require('util');

const isDev = app.get('env') == 'development';
const path = require('path');

app.set('views', __dirname);

const PublicPath = "./public";

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(csrf({cookie: true}))

app.use(express.static(PublicPath))
expressNunjucks(app, {
    watch: isDev,
    noCache: isDev
});

const getHtml = () => fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8')
    .replace('{{{bundle_js}}}', '/bundle.js')
    .replace('{{{bundle_styling}}}', '/bundle.css');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, csrf-token, Authorization");
    next();
});

app.post("/ajax/generateClientSecret", (req, res) => {
    const url = process.env.API_HOST + "/api/register/device"
    const deviceId = req.body.browser_device_id
    const data = {
        "client_secret": process.env.WEB_API_KEY,
        "device_id": deviceId
    }
    axios.post(url,data, {
        headers: {
            "Content-Type": "application/json",
            "client-secret": process.env.WEB_API_KEY
        }
    }).then((value) => {
        res.status(200).json(value.data)
    }).catch((err) => {
        console.log("ERROR BROH")
        console.log(err.data)
        res.status(400)
    })
    return
})

app.get("*", (req, res) => {
    let htmlRaw = getHtml();
    let httpUri = "https://"

    if (isDev) {
        httpUri = "http://"
    }

    const fullBaseUrl = httpUri + req.headers.host
    htmlRaw = htmlRaw.replace('{{{csrfToken}}}', req.csrfToken()).replace('{{{baseUrl}}}', fullBaseUrl);

    res.send(htmlRaw);
});

// Checking public folder
fs.access(PublicPath, fs.F_OK, (err) => {
    if (err) {
      console.log('Attention! Please run "npm run dev or yarn dev"')
      return
    }        
});

app.listen(3001, () => console.log('Welcome app listening on port 3001!')); 