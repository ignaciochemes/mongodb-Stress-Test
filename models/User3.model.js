const { Schema, model } = require('mongoose');

const NewUser = Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    status: {
        type: Boolean
    },
    role: {
        type: String
    }
});

module.exports = model('User3Stress', NewUser);