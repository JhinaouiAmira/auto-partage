//importation mongoose
const mongoose = require("mongoose");
//fonction connect to db
const connectDb = async (req, res) => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("data baase connected successfully");
  } catch (error) {
    console.log("faaaail to connect data base");
  }
};
module.exports = connectDb;
