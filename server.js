const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require("cors");
const { default: userEvent } = require('@testing-library/user-event');
const routes = require("./routes");
const mongoose = require('mongoose');
const app = express();

const MONGODB_URI = "mongodb+srv://brandon:boi@cluster0.9at6y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(
  "mongodb+srv://brandon:boi@cluster0.9at6y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
  useFindAndModify: false
  }
  
  
);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}


mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
});

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
    preflightContinue: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);

app.use(express.static(path.join(__dirname, 'build')));
const PORT = process.env.PORT || 8080;

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});



