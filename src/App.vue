<template>
  <div class="app">
  <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ejemplo Leaflet - Fullstack</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <router-link to="/" class="nav-link">Home</router-link> |
        </li>
        <li class="nav-item">
           <router-link to="/about" class="nav-link">About</router-link> |
        </li>
         <li class="nav-item">
           <router-link to="/map" class="nav-link">Map</router-link> |
        </li>
         <li class="nav-item">
           <router-link to="/carrito" class="nav-link">Carrito</router-link> |
        </li>
        <li class="nav-item">
           <router-link to="/pruebas" class="nav-link">Pruebas</router-link> |
        </li>
      </ul>
     
    </div>
  </div>
</nav>
  <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
