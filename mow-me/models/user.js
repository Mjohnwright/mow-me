const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  username:{type:String, required: true},
  password:{type:String, required: true},
  passwordConf:{type:String, required: true},
  dateJoined: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

