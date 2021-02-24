<template>
  <div class="map">
      <h1>Mapa</h1>
    <div id="mapid"></div>
  </div>
</template>

<script>
import L from "leaflet"
import { onMounted} from 'vue'

export default {

setup(){
    let mymap

    onMounted(()=>{
        mymap=L.map('mapid').setView([51.505, -0.09],13)

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFyaWFubmFtbGRuZG8iLCJhIjoiY2tsYXFkYjRzMTBlejJvbjA0aDM5aHU1NSJ9.nnhR9OMk0lEo96AWK-ATWw'
    }).addTo(mymap)
    })
  
    return{

    }
  }
}
</script>

<style>
#mapid { height: 180px }

</style>