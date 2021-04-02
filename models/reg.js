const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: {type: String, required: true },
    emailId: {type: String, required: true}
});

const Register = mongoose.model("Register", regSchema);

module.exports = Register;