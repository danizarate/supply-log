<template>
  <div id="loading" class="container">
    <div class="container mt-5">
        <h5>Estamos preparando el ingreso al sistema</h5>
    </div>
    <Loader />
    <div class="container mt-5">
        <p>Espere mientras se carga la información del usuario, en unos instantes será dirigido a la página principal.</p>
    </div>
    
  </div>
</template>

<script>

import Loader from '@/components/Loader.vue';
export default {
    components:{
        Loader
    },
    methods:{
       getUser(){
           this.Loader
       }
    },
    //ciclo de vida
    mounted(){
        this.getUser()
    }

}
</script>

<style>
</style>