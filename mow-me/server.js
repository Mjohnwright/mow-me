const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require('morgan')
const routes = require("./client/routes/api");
const port = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});

const db = require("./client/models");
// connect to database
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactr", 
);

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


const userSeed = [
  {
    firstName: "mikess",
    lastName: "guy",
    phone:2151234567,
     email: "mikeguy@gmail.com",
     username:"mikeuser",
     password:"password", 
     dateJoined: new Date(Date.now())
  },
  {
    firstName: "firsttt",
    lastName: "lasttt",
    phone:2151234568,
     email: "second@gmail.com",
     username:"seconduser",
     password:"password", 
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

function dummbyDat(){
console.log("dumbydata is hit");
db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Jobs
  .remove({})
  .then(() => db.Jobs.collection.insertMany(jobsSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
}

dummbyDat();