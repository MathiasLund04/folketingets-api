const mongoose = require('mongoose');

const ministerSchema = new mongoose.Schema({
    navn: {type: String, required: true},
    ministerpost: {type: String, required: true},
    parti: { type: String, required: true},
    aktiv: {type: Boolean, default: true},
    opdateret: {type: Date, required: false},
    });


module.exports = mongoose.model('minister', ministerSchema);