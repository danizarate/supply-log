<template>
  <nav class="navbar navbar-expand-md navbar-light"><!-- section new-nav tw-z-50 tw-py-4 tw-bg-tw-bg-blue-darkest lg:tw-py-3 -->
          <!-- navbar navbar-expand-md bg-primary navbar-dark -->
          <!-- <a class="navbar-brand"> -->
          <router-link to="#" class="navbar-brand">
            <img src="../assets/img/Logo.png" width="150" height="50" class="d-inline-block align-top logonav" alt="..." loading="lazy"/>
            
          </router-link>
          <!-- </a> -->

          <!-- Toggler/collapsibe Button -->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Navbar links -->
          <div class="collapse navbar-collapse " id="collapsibleNavbar">
            <ul class="navbar-nav navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Compras">Compras</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Repuestos">Repuestos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Contactanos">Contactanos</a>
              </li>
              
              <div v-if="getIsLoguedIn()" style="display: flex">
                    <!-- <li><button class="dropdown-item" type="button"><router-link class="textli" to="/">Logout</router-link></button></li>   -->
                    <li class="nav-item">
                        <a class="nav-link" href="#">Cotizador</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
                    </li> 
                    
                </div>
                 <div v-else>
                
                    <li class="nav-item"><a class="nav-link" href="#" @click.prevent="login">Login</a></li>
                </div> 
              
            </ul>
          </div>
      </nav>
</template>

<script>
import firebase from "firebase"
import "@/firebase/init"
export default {
    name:"Menu",
    created(){
        console.log(this.getIsLoguedIn())
        //console.log(this.store);
    },
    methods:{
        login(){

            this.$router.push('/Login');
        },
        logout(){
            firebase.auth().signOut().then(() =>{
                this.$store.dispatch('setUserAction', null)
                this.$router.push({name:'Home'})
            })
        },
        getIsLoguedIn(){
          
            return this.$store.getters.isLoguedIn;
        }
    }
}
</script>

<style>
router-link{
  text-decoration: none;
}
nav{
  font-family: 'times new roman', 'sans-serif';
  font-size: 1.3em;
}
.newnavbar{
    background-color: rgb(255, 255, 255);
    font-family: 'arial black', 'sans-serif';
    color: black;
}
</style>