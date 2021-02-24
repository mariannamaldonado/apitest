
<template>
  <div class="prueba">
      <h1>Prueba</h1>
      nombre: <input v-model="nombre" placeholder="nombre"/>
      apellido: <input v-model="apellido" placeholder="apellido"/>
      <button @click="enviar">Enviar</button>
      <hr/>
      <h6>Repuesta del servidor:</h6>
      <h6>{{consulta.saludo}}</h6>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    name:'Prueba',
    props:{
       
    },
    setup(){
        let consulta=reactive({})
        let nombre = ref("")
        let apellido = ref("")

        function enviar() {
            // console.log('enviando nombre', nombre.value, apellido.value)
            fetch('http://localhost:8081/api/guardar',{
                method: "POST",
                body: JSON.stringify({
                    nombre: nombre.value,
                    apellido:apellido.value, 
                }),
                headers:{"content-type": "application/json"}
            })
            .then((resp)=>resp.json())
            .then(datos=>consulta.saludo=datos)
            console.log('enviando nombre', nombre.value, apellido.value)

        }
      
          

        return {
            consulta, nombre, apellido, enviar
        }
    }

}
</script>