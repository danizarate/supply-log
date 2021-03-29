<template>
  <nav class="navbar navbar-expand-md bg-primary navbar-dark">
          <!-- <a class="navbar-brand"> -->
          <router-link to="#" class="navbar-brand">
            <img src="../assets/img/Logo.png" width="150" height="30" class="d-inline-block align-top logonav" alt="..." loading="lazy"/>
            
          </router-link>
          <!-- </a> -->

          <!-- Toggler/collapsibe Button -->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Navbar links -->
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contactanos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cotizador</a>
              </li>
            </ul>
          </div>
      </nav>
</template>

<script>
export default {
    name:"Menu"
}
</script>

<style>

</style>