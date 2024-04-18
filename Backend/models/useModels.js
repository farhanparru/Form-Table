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


const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
