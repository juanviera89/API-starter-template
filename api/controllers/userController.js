
const userSchema = require('../../databases//models/usuarioModel');
const tokenSChema = require('../../databases/models/tokenModel');
const cryptHelper = require("../../helpers/bycrypt-helper");

const functions = {
    registrar(req, res) {
        
            console.log('In registro');
            if (req.body.usuario && req.body.password && req.body.permisos) {
              document = new userSchema({
                usuario: req.body.usuario,
                password: cryptHelper.generate(req.body.password),
                permisos : req.body.permisos,
              });
              document.save(err => {
                if (err) {
                  console.log(JSON.stringify(err));
                }
                console.log("Usuario Guardado!");
                res.json({
                  message: "User Saved!"
                });
                return res.end();
              });
            } else {
              res.status(400).json({
                message: "Parametros incorrectos registrar usuario"
              });
              return res.end();
            }
    },
    updatePermissions(req,res){
        if(req.body.username && req.body.permisos){
            userSchema.findOneAndUpdate({usuario : req.body.username}, {$set : {permisos : req.body.permisos}}, (err,data)=>{
                if(err){
                    console.log('Error updating user permissions -->'+JSON.stringify(err))
                    res.status(403).json({
                        success : false,
                        message : 'Error actualizando permisos de usuario'
                    })
                    return res.end();
                }
                res.json({
                    success : true,
                    message : 'Usuario permisos de usuario modificados con éxito'
                })
                return res.end();
            })
        }else{
            console.log('Data incorrecta update usuario');
            res.status(403).json({
                success : false,
                message : 'Petición incorrecta faltan datos'
            })
            return res.end();
        }
    },
    logout(req,res){
        const token = req.body.token || req.query.token || req.headers["x-access-token"];
        tokenSChema.remove({token : token}, (err,res)=>{
            if(err){
                console.log('Error token removing --> '+JSON.stringify(err));
                res.status(403).json({
                    success : false,
                    message : 'Error'
                })
                return res.end();
            }
            console.log('Sesion Cerrada -->'+JSON.stringify(res))
            res.json({
                success : true,
                message : 'Sesion Deslogueada'
            })
            return res.end();
        })
    }
}

module.exports = functions;