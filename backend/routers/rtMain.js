const express = require('express')
const daoUsuarios = require('../dao/daoUsuarios')
const rtMain = express.Router()
const Usuario = require('../models/Usuario')


rtMain.get('/welcome', (req, res)=>{
    res.json({
        saludo:'Hola mundo'
    })
})

rtMain.post('/guardar',(req,res)=>{
    console.log(req.body)
    daoUsuarios.guardar(req.body)
    .then(resp=>{
        res.json({resp:'Guardado correctamente en mongo'})
    })
})

// rtMain.post('/guardar', (req, res)=>{
//     let datos = req.body
//     console.log('Gaurdado en la bd', datos)
//    res.json({
//        respuesta:'Datos recibidos',
//        datos: datos
//    })
// })

module.exports= rtMain
