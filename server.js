// require express and body parser
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import DB Connection
require("./config/db");

// create express app
const app = express();

app.use(
  cors({
    orgin: "http://localhost:4200",
  })
);

// define port to run express app
const port = process.env.PORT || 3000;
// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

// Add endpoint
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Listen to server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Import API route
var routes = require("./api/routes/userRoutes"); //importing route
routes(app);

app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
