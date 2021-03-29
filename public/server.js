const express = require('express');
const bodyParser = require('body-parser');
const logger = require("morgan");
const path = require('path');
const compression = require("compression");
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, 'build')));

mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useFindAndModify: false
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});