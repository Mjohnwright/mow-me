const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactr",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    firstName: "mike",
    lastName: "guy",
    phone:2151234567,
     email: "mikeguy@gmail.com",
     username:"mikeuser",
     password:"password", 
     dateJoined: new Date(Date.now())
  },
  {
    firstName: "first",
    lastName: "last",
    phone:2151234568,
     email: "second@gmail.com",
     username:"seconduser",
     password:"password", 
     dateJoined: new Date(Date.now())
  }
  
];

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
