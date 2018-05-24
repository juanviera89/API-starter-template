var mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    usuario : String,
    password : String,
    permisos : String,
    createdAt : {type : Date, default : Date.now},
    updatedAt : {type : Date},
    updatedBy : String
});
module.exports = mongoose.model('usuario', usuarioSchema);
