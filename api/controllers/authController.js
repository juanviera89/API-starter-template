var tokenHelper = require("../../helpers/token-helper");
const userModel = require("../../databases/models/usuarioModel");
const cryptHelper = require("../../helpers/bycrypt-helper");
const actionsModel = require('../../databases/models/actionsModel');

const authenthicate = {
  login(req, res) {

    console.log('In Login!')
    if (req.body.usuario && req.body.password) {
      userModel.findOne({ usuario: req.body.usuario }, (err, data) => {
        if (err) {
          console.log("Error finding user -->     " + JSON.stringify(err));
        }
        if (data) {
          console.log('User Valid: '+cryptHelper.validate(req.body.password, data.password));
          if (cryptHelper.validate(req.body.password, data.password)) {
            const token = tokenHelper.tokenSet(req.body.usuario, data.permisos);
            const actionSubmission = new actionsModel({
              accion : 'login',
              createdBy : req.body.usuario,
            })
            actionSubmission.save((err)=>{
              if(err){
                console.log(JSON.stringify(err))
              }
            })
            res.json({
              success: true,
              token: token,
              message: "Login OK!"
            });
            return res.end();
          } else {
            res.json({
              success: false,
              message: "Error usuario contraseña incorrecto"
            });
            return res.end();
          }
        } else {
          res.json({
            success: false,
            message: "Usuario o contraseña incorrectos!"
          });
          return res.end();
        }
      });
    } else {
      res.status(400).json({
        message: "Parametros incorrectos registrar usuario"
      });
      return res.end();
    }
  },
  validar(req, res, next) {

    // Check header or url parameters or post parameters for token
    console.log('In validar token app.use()');
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];

    // Check header or url parameters or post parameters for _id
    //const _id = req.body._id || req.query._id || req.headers['x-access-id'];

    if (token) {
      tokenHelper.tokenGet(token).then(data => {
          console.log('Success Token Verification');
          console.log('Success go NEXT')
          req.permisos = data.permisos;
          req.username = data.username;
          next();
    })
    .catch(err => {
      console.log('Fallo Autenticacion Token Invalido');
      console.log(token);
      console.log("El error --> [autenticate] "+JSON.stringify(err))
          res.status(403).send({
            success: false,
            message: "Fallo de autenticación",
            authErr : true
          });
          return res.end();
        });
    } else {
      console.log('No se detecto token')
      res.status(403).send({
        success: false,
        message: "Fallo de autenticación",
        authErr : true
      });
      return res.end();
    }
  },
  testAuth(req,res){
    res.json({
      sucess : true,
      message : 'Auth Valid',
    })
    return res.end()
  }
};

module.exports = authenthicate;
