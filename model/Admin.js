//importation mongoose
const mongoose = require("mongoose");
//creation schema
const { Schema } = mongoose;
const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = Admin = mongoose.model("admin", adminSchema);
