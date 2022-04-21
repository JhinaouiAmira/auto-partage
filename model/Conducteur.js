//importation mongoose
const mongoose = require("mongoose");
//creation schema
const { Schema } = mongoose;
const conducteurSchema = new Schema({
  prenom: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telephone: {
    type:  Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  
});
module.exports = Conducteur = mongoose.model("conducteur", conducteurSchema);
