require('dotenv').config()
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var bodyParser = require('body-parser');
var session = require('express-session');
const axios = require('axios');

const express = require('express');
let app = express();
const expressNunjucks = require('express-nunjucks');
const fs = require('fs');
let device_id = '';
const isDev = process.env.APP_ENV != 'production';
const path = require('path');

let webHost = process.env.WEB_HOST_POS;
let homePage = process.env.API_HOST;
app.set('views', __dirname);
let pathIndexHtml = 'index.html';

if (process.env.APP_ENV == 'production') {
    pathIndexHtml = '../../build/output.html';    
}

if (process.env.APP_ENV == 'staging') {
    pathIndexHtml = '../../build/stage-output.html';    
}
let PublicPath = '';

switch (process.env.NODE_ENV) {
    case 'development':
        PublicPath = "./public";
        break; 
    case 'production':
        PublicPath = "./build";
        break; 
    default: 
        PublicPath = "./public";
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(csrf({cookie: true}))
app.use(express.static(PublicPath))
expressNunjucks(app, {
    watch: isDev,
    noCache: isDev
});

var RedisStore = require('connect-redis')(session);
app.use(session({
    store: new RedisStore({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        db: parseInt(process.env.REDIS_DB)
    }),
    secret: '@@QASIR_MITRA_PROFILE_WEB_VIEW', 
    cookie: {maxAge: 31622400000},
    resave: true,
    saveUninitialized: true
}))

var mysql = require('mysql');

/** 
 * Function to check on token login, this function will be called in middleware 
 * TODO: 
 * - Clean up these console log in the future
 * - Make this code more clean
 * FIXME: Remove get token from query
 * @return function
 **/
function authMiddlewareLogin (req, res, next) {
    const headers = req.headers;
    let authToken = headers['authorization'] || headers['token'] || headers['m_token'];
    device_id = headers['device-id'];
    console.log("Auth TOKEN HEADER : ")
    console.log(authToken)    
    if (!authToken) {
        console.log("Get Data from URL query  : ")
        console.log(req.query)        
        authToken = req.query.token;
        device_id = req.query.device_id;
    } else if(authToken) {
        authToken = authToken.replace("Bearer ", "");
    } else {
        res.status(403).send("not authorized");
        return
    }
    console.log("Auth Token after : ")
    console.log(authToken)
    let authTokenLogin = req.session.tokenLogin;
    let merchantId = req.session.merchantId;
    console.log("Auth TOKEN SESSION : ")
    console.log(authTokenLogin)
    console.log("MERCHANT ID")
    console.log(merchantId)
    console.log(authToken)

    if((authToken !== undefined && authToken !== '') && authToken != authTokenLogin){
        authTokenLogin = ""
        merchantId = ""
    }

    if (!authTokenLogin && !merchantId) {
        const connection = mysql.createConnection({
            host     : process.env.DB_HOST,
            user     : process.env.DB_USERNAME,
            password : process.env.DB_PASSWORD,
            database : process.env.DB_DATABASE,
            port : process.env.DB_PORT
        });
        connection.connect();        
        connection.query("select * from merchant_tokens where api_token = '"+authToken+"'", (error, results) => {
            console.log("Error from query to database : ")
            console.log(error)
            console.log("Result Query : ")
            console.log(results)
            if (error == null && results.length > 0) {
                const data = results[0];
                const merchantId = data.merchant_id;
                const apiToken = data.api_token;
                req.session.tokenLogin = apiToken
                req.session.merchantId = merchantId
                next();
            } else {
                res.status(403).send("not authorized");
            }
        });
        connection.end();
    } else {
        next();
    }
}

// if (!isDev) {
//     app.get("/service-worker.js", (req, res) => {    
//         res.sendFile(path.resolve(__dirname, "public", "service-worker.js"));
//     });
// }

const getHtml = () => fs.readFileSync(path.join(__dirname, pathIndexHtml), 'utf8')
    .replace('{{{bundle_js}}}', '/bundle.js')
    .replace('{{{bundle_styling}}}', '/bundle.css');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, csrf-token, Authorization");
    next();
});

app.get("*", authMiddlewareLogin, (req, res) => {
    let htmlRaw = getHtml();
    let httpUri = "https://"
    
    if (isDev) {
        httpUri = "http://"
    }

    const headers = req.headers;
    let authToken = req.session.tokenLogin
    let merchantId = req.session.merchantId
    console.log("Auth TOKEN : ")
    console.log(authToken)
    console.log(device_id)
    const fullBaseUrl = httpUri + headers.host
    console.log(fullBaseUrl)
    htmlRaw = htmlRaw.replace('{{{csrfToken}}}', authToken)
        .replace('{{{baseUrl}}}', fullBaseUrl)
        .replace('{{{webHost}}}', webHost)
        .replace('{{{homePage}}}', homePage)
        .replace('{{{merchantId}}}', merchantId)
        .replace('{{{deviceId}}}', device_id);
    res.send(htmlRaw);
    return
});

let runningPort = 3000;

if (process.env.APP_PORT) {
    runningPort = process.env.APP_PORT;
}

app.listen(runningPort, () => console.log('Example app listening on port ' + runningPort +'! '));