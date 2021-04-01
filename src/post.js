const express = require('express');
const mongoose = require('mongoose');

var regSchema = new mongoose.Schema({
    firstName: String,
    lastNameName: String
});

var User = mongoose.model("User", regSchema);