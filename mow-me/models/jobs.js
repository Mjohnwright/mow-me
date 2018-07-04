const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobsSchema = new Schema({
  username: { type: String, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  price: { type: String, required: true },
  dateNeededBy: { type: Date, default: Date.now },
  // jobChosen:{ type: Boolean, required: false, default:false },
  user: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "User"
    }
  ]
});

const Jobs = mongoose.model("Jobs", jobsSchema);

module.exports = Jobs;


/*•	UserName
•	Street address
•	City
•	State
•	Zip Code
•	Price
•	Needs to be completed by date
•	I want this job 
*/