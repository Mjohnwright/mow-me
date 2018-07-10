const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./models");
const logger = require('morgan')
const routes = require("./routes");
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const PORT = process.env.PORT || 3001;
 
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

//Express Session
app.use(session({
  secret: 'secret',
  saveUnitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Initialize Passport
var initPassport = require('./passport/init');
initPassport(passport);

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// Connect to the Mongo DB
const MONGO = 'mongodb://localhost/mowme';
mongoose.Promise = Promise;
mongoose.connect(MONGO)
.then(result => {
  console.log(`Connected: ${result.connections[0].name} : ${result.connections[0].host} : ${result.connections[0].port}`);
  seedDb();
})
.catch(err => console.log('Mongo connection error:', err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

const userSeed = [
  {
    firstName: "ronald",
    lastName: "mcdonald",
    phone:2151234567,
     email: "mikeguy@gmail.com",
     username:"mikeuser",
     password:"password",
     passwordConf:"password",
     dateJoined: new Date(Date.now())
  },
  {
    firstName: "first",
    lastName: "last",
    phone:2151234568,
     email: "second@gmail.com",
     username:"seconduser",
     password:"password",
     passwordConf:"password",
     dateJoined: new Date(Date.now())
  }
 ];

const jobsSeed = [
  {
    username: "marc",
    streetAddress: "333 street",
    city:"phila",
    state: "PA",
    zipCode:"19148",
    price:"100",
    dateNeededBy: new Date(Date.now())
  },
  {
    username: "mann",
    streetAddress: "222 street",
    city:"phila",
    state: "PA",
    zipCode:"19148",
    price:"100",
    dateNeededBy: new Date(Date.now())
  }
 ];

seedDb = () => {
  db.Users.remove({})
  .then(() => {
    db.Users.create(userSeed)
    .then(data => {
      console.log(` records inserted ${data}`);
    })
    .catch(err => {
      console.error(err);
    });
  })
  .catch(err => {
    console.error(err);
  });

  db.Jobs.remove({})
  .then(() => {
    db.Jobs.create(jobsSeed)
    .then(data => {
      console.log(` records inserted ${data}`);
    })
    .catch(err => {
      console.error(err);
    });
  })
  .catch(err => {
    console.error(err);
  });
}
