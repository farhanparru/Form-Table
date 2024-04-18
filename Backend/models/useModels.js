const mongoose = require('mongoose');


const recordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }
});


const userData = mongoose.model('userData', recordSchema);

module.exports = userData;
