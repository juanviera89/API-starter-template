const mongoose = require('mongoose');

const accionesSchema = new mongoose.Schema({
    accion : String,
    createdAt : {type : Date, default : Date.now},
    createdBy : {type : String, default : "defaultUser"},
    dataSubmitted : mongoose.Schema.Types.Mixed,
})
module.exports = mongoose.model('action', accionesSchema);