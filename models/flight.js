const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const today = new Date();
const flightSchema = new Schema({
    airline: {type: String, enum: ['American','Delta','Southwest','United']},
    airport: {type: String, enum: ['ATL','DFN','DEN','LAX','SAN'], default: 'DEN'},
    flightNo: {type: Number, min: 10, max: 9999},
    departs: {type: Date, default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
});


module.exports = mongoose.model('Flight', flightSchema);
