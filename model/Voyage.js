//importation mongoose
const mongoose = require("mongoose");
//creation schema
const { Schema } = mongoose;
const voyageSchema = new Schema({
  ville_départ: {
    type: String,
    required: true,
  },
  ville_arrivée: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  prix: {
    type: String,
    required: true,
  },
  idc: {
    type: String,
    required: true,
  },
});
module.exports = Voyage= mongoose.model("voyages", voyageSchema);
