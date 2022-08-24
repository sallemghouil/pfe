const mongoose = require('mongoose');



const formationSchema = new mongoose.Schema({
  name:  { type: String, uppercase: true, trim: true, required: true },
  nbrMax : Number,
  price : Number,
  createdOn : {type : Date , default : Date.now},
  pic: String,
  user:{type:mongoose.Schema.Types.ObjectId,ref:"formation"}
});

module.exports = Formation = mongoose.model('formations', formationSchema);