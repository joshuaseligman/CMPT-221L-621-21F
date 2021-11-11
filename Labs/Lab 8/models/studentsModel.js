const mongoose = require('mongoose');

const studentsSchema = mongoose.Schema({
    firstName: String,
    lastName: String
});

const studentsModel = mongoose.model('Students', studentsSchema);
module.exports = studentsModel;