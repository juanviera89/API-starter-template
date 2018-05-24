var mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
    token : String,
    username : String,
    permisos : String,
    createdAt : {type : Date, default : Date.now, expires: 3600 },
});
module.exports = mongoose.model('token', tokenSchema);
