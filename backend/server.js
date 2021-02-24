const express = require('express')
const app = express()
const rtMain= require('./routers/rtMain')
const db = require('./conexion')

//base de datos mongodb
db.on('error', console.error.bind(console, "Error de conexion mongo"))
db.once('open',()=>console.log("conexion mongo OK!!"))

//midelwares
app.use(express.json())

//enrutadores
app.use('/api', rtMain)

    app.listen(8081, (err) => {
        if (err) console.log('Errores: ', err)
        console.log('Servidor arrancado en 8081')
    })

    
