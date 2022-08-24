const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, trim: true, required: [ true, 'Add name'] },
  dateNais: {type : String, required: [ true, 'Add date of birth'] },
  email: { type: String, lowercase: true, required: [ true, 'Add email']},
  password: { type: String , required: [ true, 'Add password']},
  isBanned: { type: Boolean, default: false, required: true },
  role: {
    type: String,
    enum: ["candidat", "formateur", "administrateur"],
    default: "client",
    required:  [ true, 'Add role'],
  },
  createdOn: { type: String, default: Date.now },
  pic: String,
});

module.exports = User = mongoose.model("user", userSchema);