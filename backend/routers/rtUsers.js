const express = require('express')
const rtUsers = express.Router()
const daoUsuarios = require('../dao/daoUsuarios')

rtUsers.get('/nuevo', (req,res)=>{
    res.render('usuarios/formulario')
})

rtUsers.post('/guardar',(req,res)=>{
    console.log(req.body)
    daoUsuarios.guardar(req.body)
        .then(resp=>{
            res.render('usuarios/formulario',{mensaje:resp})
        })
})

module.exports= rtUsers