//importation mongoose
const mongoose = require("mongoose");
//creation schema
const { Schema } = mongoose;
const voitureSchema = new Schema({
  immatriculation: {
    type: String,
    required: true,
  },
  marque: {
    type: String,
    required: true,
  },
  couleur: {
    type: String,
    required: true,
  },
  nombre_places: {
    type: Number,
    required: true,
  },
});
module.exports = Voiture = mongoose.model("voiture", voitureSchema);
