<template>
    <div class="container">
        <div class="row mt-5">
            <div class="row mt-5">
                <div class="col-sm-11 ml-5"><img src="../assets/img/Logo.png" class="d-inline-block align-top logo" alt="..." loading="lazy"/></div>
            </div>
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <form @submit.prevent="login">
                    
                    
                    <h3 class="mt-5">Por favor ingrese sus credenciales</h3>
                    <div class="form-group mx-sm-3 mb-2">
                        <label for="exampleInputEmail1">Email</label>
                        <div class="col-sm-10">
                            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <small id="emailHelp" class="form-text text-muted">Estos campos son obligatorios</small>
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
            </div>
        </div>
      <!-- <div class="row justify-content-center align-items-center vh-100"> -->
            
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
            console.log(this.email)
            console.log(this.password) 
            
            if (this.email && this.password){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(user =>{
                    //La validacion ha sido exitosa
                    this.$store.dispatch('setUserAction', user) //Llama a la mutacion en Store/index.js
                    
                    this.$router.push("/Cotizador") // Envia al usuario al home
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
.logo{
    width: 250px;
    height: 80px;
}
</style>