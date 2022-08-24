const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  Name: { type: String, trim: true, required: [ true, 'Add name'] },
  Surname: { type: String, trim: true, required: [ true, 'Add name'] },
  dateNais: {type : String, required: [ true, 'Add date of birth'] },
  email: { type: String, lowercase: true, required: [ true, 'Add email']},
  password: { type: String , required: [ true, 'Add password']},
  isBanned: { type: Boolean, default: false, required: true },
  MobileNumber: Number,
  Experience: String,
  Address: String,
  Postcode: Number,
  Education: String,
  Country: String,
  createdOn: { type: String, default: Date.now },
  pic: String,
});
module.exports = Profile = mongoose.model("profile", profileSchema);