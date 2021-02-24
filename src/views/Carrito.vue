<template>
  <div class="home">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-8 col-md-6">
                 <h1>Carrito</h1>

              </div>
          </div>
      </div>
  </div>

  <!-- <div class="container">
    <div class="row">
        <main id="items" class="col-sm-8 row"></main>
        <aside class="col-sm-4">
            <h2>Carrito</h2>
            <ul id="carrito" class="list-group"></ul>
            <hr>
            <p class="text-right">Total: <span id="total"></span>&euro;</p>
            <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>
        </aside>
    </div>
</div> -->
</template>

<script>
import Item from '@components/Item.vue'
export default {
    name: 'Carrito',
    components:{
        Item
    },
    setup(){


        return{

        }
    }
}
</script>

<style>

</style>