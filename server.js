let express = require("express");
let app = express();
let routes = require('./routes');
let path = require('path');
const bodyParser = require ('body-parser');
const cookieParser = require("cookie-parser");
const session = require('express-session');

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(session({
	secret: 'mikewang',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 1000 }
}));


// bodyParse setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', routes());

app.listen(port, () => {
  console.log("http://localhost:"+port);
});

