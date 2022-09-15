const mongoose = require("mongoose");
var uri =
  "mongodb+srv://Ananth:Ananth.Kumar_3@cluster0.aopakyj.mongodb.net/?retryWrites=true&w=majority";

const dotenv = require("dotenv");
dotenv.config();
console.log(dotenv);

// Declare a variable named option and assign optional settings
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(
  () => {
    console.log("Database connection established!");
  },
  (err) => {
    {
      console.log("Error connecting Database instance due to:", err);
    }
  }
);
