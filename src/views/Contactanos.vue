<template>
    <div v-if="loading">
        
        <Loader />
    </div>
    <div v-else-if="!loading">
        <Menu />
        <!-- <Carrusel /> -->
        
        <!-- Imagen-1 Fondo de pantalla -->
      
        
        <div class="card bg-dark text-primary">
            <img class="card-img" src="../assets/img/contactanos.png" alt="Card image">
            <div class="card-img-overlay">
              <h5 class="card-title "><h1><strong>Bienvenido a Supply Log</strong></h1></h5>
              <p class="card-text">¡Tu mejor opción para tus compras en el extranjero, donde nosotros hacemos todo por ti!</p>
              <p class="card-text"></p>
            </div>
        </div>
        <Whatsapp />

        <div class="container">
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8">
                    <!-- onsubmit="return Comprobar(this)" -->
                    <form method="post"> <!-- class="contact-form" -->
                        <!-- Titulo del Form -->
                        <h1 class="mt-5">Formulario de Contacto</h1>
                        <h3 class="mt-3">Por favor complete los datos y presione enviar.</h3>
                        <!-- Razon Social o nombre -->
                        <div class="form-group row mt-5">
                            <label for="nombre" class="col-sm-2 col-form-label">Nombre o Razón Social</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="nombre" placeholder="Ejemplo: Bruno Ferrari o SmartNet Ltda. " v-model="nombre">
                            </div>
                        </div>
                        <!-- e-Mail -->
                        <div class="form-group row">
                            <label for="eMail" class="col-sm-2 col-form-label">e-Mail</label>
                            <div class="col-sm-8">
                                <input type="email" class="form-control" id="eMail" placeholder="example@domain.com" v-model="email">
                            </div>
                        </div>
                        <!-- Telefono -->
                        <div class="form-group row">
                            <label for="fono" class="col-sm-2 col-form-label">Teléfono</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="fono" placeholder="123456789" v-model="fono">
                            </div>
                        </div>
                        <!-- Part Number -->
                        <div class="form-group row">
                            <label for="partnumber" class="col-sm-2 col-form-label">Part Number</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="pnumber" placeholder="Pegue acá el link del part number por el que desea cotizar" v-model="partnumber">
                            </div>
                        </div>
                        <!-- Mensaje -->
                        <div class="form-group mt-3">
                            <label for="msg">Escríbanos su mensaje</label>
                            <textarea class="form-control" id="mensaje" rows="3" placeholder="Escriba su mensaje acá; puede tambien pegar hipervinculos de SKU o P/N de piezas o repuestos" v-model="msg"></textarea>
                        </div>
                        <!-- nombre, msg, email, fono, partnumber -->
		                <input type="button" value="Enviar solicitud" @click="preparar(nombre, msg, email, fono, partnumber)"/><!-- sendEmail() -->
                        <!-- <button class="btn btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                        </button> -->
                    </form>
                </div>
            </div>
        </div>
        <hr style="color: #0056b2;" /> <!-- Crea divisor -->
        <Footer />
    </div>
</template>

<script>
import Loader from '@/components/Loader.vue'
import Whatsapp from '@/components/Whatsapp.vue'
import Menu from "@/components/Menu.vue"
import Footer from "@/components/Footer.vue"
/* import Carrusel from '@/components/Carrusel.vue' */
export default {
    name: "Repuestos",
    components:{
        Loader,
        Whatsapp,
        Footer,
        Menu
       /*  Carrusel */
    },
    data(){
      return{
        nombre:'',
        email:'',
        fono:'',
        partnumber:'',
        msg:''
      }
    },
    methods:{
        preparar(nombre, msg, email, fono, partnumber){
            this.nombre = nombre
            this.msg = msg
            this.email = email
            this.fono = fono
            this.partnumber = partnumber
            console.log(this.nombre)
            console.log(this.email)
            console.log(this.msg)
            Email.send({
                SecureToken : "64901202-2440-4bf5-9115-3de921f02bfa",
                To : 'dzarate@pcfriend.cl',    //them@website.com
                From : "contacto@supplylog.cl",       //you@isp.com
                Subject : "Formulario de Contacto",
                Body : `${this.nombre}, te ha enviado el siguiente mensaje: ${this.msg} <br/>El correo de ${this.nombre} es: ${this.email} y su teléfono es: ${this.fono}. <br/>Part Number consultado: ${this.partnumber}`
                })
                .then(function(){

                    alert("Formulario enviado exitosamente")
                });
        },
        async carga(){
            //ponemos un timeot para que se muestren los spinner
            
            this.loading = true;
            setTimeout(() => {
                //usamos el servicio para traer los datos
                this.loading = false;
                /* Document.querySelector(".contact-form").addEventListener("submit", this.submitForm()); */
            }, 1000);

        },
    },
    mounted(){
        this.carga()
        
    }
}
</script>

<style>

</style>