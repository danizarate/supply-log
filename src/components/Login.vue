<template>

  <div id="container-login">
      
      <!-- <div class="row justify-content-center align-items-center vh-100"> -->
            <form @submit.prevent="ContenedorLogin">
                <h1>Bienvenido a Supply Log</h1>
                <div class="form-group mx-sm-3 mb-2">
                    <label for="exampleInputEmail1">Email Address</label>
                    <div class="col-sm-10">
                        <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <small id="emailHelp" class="form-text text-muted">This field it's requiered and validated</small>
                </div>

                
                <div class="form-group mx-sm-3 mb-2">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" v-model="password" class="form-control" id="inputPassword" placeholder="Password">
                    </div>
                </div>

                <div class="col">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
       <!--  </div> -->
  </div>
</template>

<script>
import firebase from "firebase"
import "@/firebase/init"
export default {
    name: 'ContenedorLogin',
    components: firebase,
    data(){
        return{
            email:'',
            password:'',
            error: null
            
        }
    },
    methods:{
        login(){
            /* console.log(this.email)
            console.log(this.password)  */
            
            if (this.email && this.password){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(user =>{
                    //La validacion ha sido exitosa
                    this.$store.dispatch('setUserAction', user) //Llama a la mutacion en Store/index.js
                    
                    this.$router.push("/") // Envia al usuario al home
                }).catch(error =>{
                    //Se produjo un error en la autenticacion
                    console.log(error)
                    if(error.code == "auth/wrong-password"){
                        alert('Error de autenticacion. Nombre de usario o contraseña incorrecta')
                    }else {
                        alert('Se ha producido un error inesperado.')
                    }
                })
                
            }
        }
    }
}
</script>

<style>

</style>