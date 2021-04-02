const mongoose = require("mongoose");
const { findRenderedDOMComponentWithClass } = require("react-dom/test-utils");
const db = require("../models");

mongoose.connect("mongodb://localhost/registerdusers");

const registerSeed = [
    {
        firstName: "Brandon",
        lastName: "Fontes"
    },
    {
        firstName: "neamen",
        lastName: "Dobamo"
    },
    {
        firstName: "Johnny",
        lastName: "Lawrence"
    },
    {
        firstName: "Daniel",
        lastName: "Larusso"
    },
     {
        firstName: "asdfg",
        lastName: "asdfgh"
    },
];

db.Register
  .remove({})
  .then(() => db.Register.collection.insertMany(registerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });