const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const compression = require("compression");
const logger = require("morgan");

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, 'build')));

mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useFindAndModify: false
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
});




app.post('/post-feedback', function (req, res) {
    dbConn.then(function(db) {
        // delete req.body._id; // for safety reasons
        db.collection('feedbacks').insertOne(req.body);
    });    
    res.send('Data received:\n' + JSON.stringify(req.body));
});

app.get('/view-feedbacks',  function(req, res) {
  dbConn.then(function(db) {
      db.collection('feedbacks').find({}).toArray().then(function(feedbacks) {
          res.status(200).json(feedbacks);
      });
  });
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});