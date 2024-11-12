const mongoose = require('mongoose');

const instituteSchema = new mongoose.Schema({
    IdInstitutoOK: String,
    IdInstitutoBK: String,
    DesInstituto: String,
    Alias: String,
    Matriz: String,
    IdTipoGiroOK: String,
    IdInstitutoSupOK: String,
});

const Institute = mongoose.model('Institute', instituteSchema, 'cat_institutes');
module.exports = Institute;
