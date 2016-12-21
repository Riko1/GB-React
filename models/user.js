var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    login: String,
    email: String,
    age: Number,
    isFired: Boolean
});

mongoose.model('User', userSchema, 'users');