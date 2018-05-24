/*
* Tokens Controller
*/

'use strict';

/* const secret = require( '../secret'); */
const tokenSchema = require('../databases/models/tokenModel');
const codeHelper = require('../helpers/bycrypt-helper');

var tokenSet = function generateToken (user,permisos) {

	// Generate json web token

  const token = codeHelper.generate(user);

  const document = new tokenSchema({
    token : token,
    username : user,
    permisos : permisos,
  })

  document.save((err)=>{
    if(err){
      console.log('Error Guardando Token: '+JSON.stringify(err))
    }
    console.log('Token Saved: '+token)
    //y(token);
    
  })
  return token;
};


var tokenGet = function	getToken (token) {

  return new Promise((resolve, reject)=>{
    tokenSchema.findOne({token : token}, (err,docs)=>{
      if(err){
        console.log('Error obteniendo token: '+JSON.stringify(err))
      }
  
      if(docs){
        console.log(docs.token);
        if(docs.token){
          if(codeHelper.validate(docs.username, docs.token)){
            tokenSchema.findOneAndUpdate({token : token}, {$set : {createdAt : new Date()}}, (err,docs)=>{
              if(err){
                console.log("Error updating TTL token: "+JSON.stringify(err));
              }
              console.log('TTL Time Update --> '+JSON.stringify(docs));
              resolve({success : true, permisos : docs.permisos, username : docs.username});
            })
          }
        }else{
          reject({success : false});
        }
      }else{
        reject({success : false});
      }
    });
  })


};



module.exports = {
  tokenSet,
  tokenGet
}