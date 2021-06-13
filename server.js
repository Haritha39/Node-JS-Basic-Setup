const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./database/db');
const app = express();
const port = 3000;

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(function (req, res, next) {
  req.connection = connection;
  next();
});

// Route
const router = require('./routes');
app.use("/api", router.user);
app.use("/api", router.topics);

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});