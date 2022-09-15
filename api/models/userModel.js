const mongoose = require("mongoose");
// declare schema and assign schema class
const schema = mongoose.Schema;

// create schema instance and add schema prop
const UserSchema = new schema({
  name: String,
  dob: String,
  gender: String,
  qualification: String,
  mobileNumber: String,
  email: String,
});

module.exports = mongoose.model("userModel", UserSchema);
