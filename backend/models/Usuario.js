const mongoose = require("mongoose")
const {Schema} = mongoose


const schemaUsuario = new Schema({
    nombre: {type:String},
    apellido: {type:String},
   
})

class Usuario{}

schemaUsuario.loadClass(Usuario)
module.exports=mongoose.model('usuario',schemaUsuario)