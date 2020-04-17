const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true 
    },
    login: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true 
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByLogin = (login, callback) => {
    const query = {login: login};
    User.findOne(query, callback);
};

module.exports.getAllUsers = (callback) => {
    User.find({}, callback);
};

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
};

module.exports.addUser = (newUSer, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUSer.password, salt, (err, hash) => {
            if(err) throw err;
            newUSer.password = hash;
            newUSer.save(callback);
        });
    });
};

module.exports.comparePass = (clientPass, dbPass, callback) => {
    bcrypt.compare(clientPass, dbPass, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
};