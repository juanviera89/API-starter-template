const actionsModel = require('../../databases/models/actionsModel');

const mongoose = require('mongoose');
const moment = require('moment');
const fs = require('fs');
const path = require('path');

const funciones = {
    findAll(req,res){
        actionsModel.find({}, {_id : 0}, (err,docs)=>{
            if(err){
                console.log('Error getting actions --> '+JSON.stringify(err));
                res.status(404).json({
                    success : false,
                    message : 'Error In Finding all actions'
                });
                return res.end();
            }
            return res.json({
                success : true,
                actions : docs,
                message : 'RES OK'
            })
        })
    },
    findByAction(req,res){
        if(req.params.accion){
            actionsModel.find({accion : req.params.accion},{_id : 0}, (err,docs)=>{
                if(err){
                    if(err){
                        console.log('Error getting actions by action --> '+JSON.stringify(err));
                        res.status(404).json({
                            success : false,
                            message : 'Error In Finding actions by action'
                        });
                        return res.end();
                    }
                }
               return res.json({
                    success : true,
                    actions : docs,
                    message : 'Res OK'
                })
            })
        }
    },
    findByUsername(req,res){
        if(req.params.usuario){
            actionsModel.find({usuario : req.params.usuario}, {_id : 0}, (err,docs)=>{
                if(err){
                    if(err){
                        console.log('Error getting actions by usuario --> '+JSON.stringify(err));
                        res.status(404).json({
                            success : false,
                            actions : docs,
                            message : 'Error In Finding actions by usuario'
                        });
                        return res.end();
                    }
                }

            })
        }
    }
}

module.exports = funciones;