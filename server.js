//importation express
const express = require("express");
//creation instance
const app = express();
//importation dotenv
require("dotenv").config();
//format json
app.use(express.json());
//connect data base
const connectDb = require("./config/connectDB");
connectDb();

//route global
app.use("/api/admin", require("./routes/admin"));
app.use("/api/conducteur", require("./routes/conducteur"));
app.use("/api/voyageur", require("./routes/voyageur"));


//creation server  
const port = process.env.PORT;  
app.listen(port, (error) => {
  error ? console.log(error) : console.log(`server is runing on port ${port}`);
});
 