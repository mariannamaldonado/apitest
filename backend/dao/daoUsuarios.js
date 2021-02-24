const Usuario = require('../models/Usuario')
// const mailer = require('../modules/mailer')
let daoUsuarios={}

//guardar
daoUsuarios.guardar=function guardar(usuario){
    return new Promise((resolved,reject)=>{
        let u = new Usuario(usuario)
        u.save()
            .then(()=>resolved("Guardado correctamente"))
            .catch(err=>resolved(err))
    })
}


module.exports = daoUsuarios