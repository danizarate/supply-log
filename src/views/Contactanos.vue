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
                    <form method="post" id="formulario"> <!-- class="contact-form" -->
                        <!-- Titulo del Form -->
                        <h1 class="mt-5">Formulario de Contacto</h1>
                        <h3 class="mt-3">Por favor complete los datos y presione enviar.</h3>
                        <!-- Razon Social o nombre -->
                        <div class="form-group row mt-5">
                            <label for="nombre" class="col-sm-2 col-form-label">Nombre o Razón Social</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="nombre" placeholder="Ejemplo: Bruno Ferrari o SmartNet Ltda. " v-model.trim="nombre" required>
                            </div>
                        </div>
                        <!-- e-Mail -->
                        <div class="form-group row">
                            <label for="eMail" class="col-sm-2 col-form-label">e-Mail</label>
                            <div class="col-sm-8">
                                <input type="email" class="form-control" id="eMail" placeholder="example@domain.com" v-model="email" required>
                            </div>
                        </div>
                        <!-- Telefono -->
                        <div class="form-group row">
                            <label for="fono" class="col-sm-2 col-form-label">Teléfono</label>
                            <div class="col-sm-8">
                                <input type="number" class="form-control" id="fono" placeholder="123456789" v-model="fono" required>
                            </div>
                        </div>
                        <!-- Part Number -->
                        <div class="form-group row">
                            <label for="partnumber" class="col-sm-2 col-form-label">Part Number</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="pnumber" placeholder="Pegue acá el link del part number por el que desea cotizar" v-model="partnumber" required>
                            </div>
                        </div>
                        <!-- Mensaje -->
                        <div class="form-group mt-3">
                            <label for="msg">Escríbanos su mensaje</label>
                            <textarea class="form-control" id="mensaje" rows="3" placeholder="Escriba su mensaje acá; puede tambien pegar hipervinculos de SKU o P/N de piezas o repuestos" v-model="msg"></textarea>
                        </div>
                        
                        <button class="btn btn-primary" type="button" id="enviar" @click="preparar(nombre, msg, email, fono, partnumber)" :disabled="habilitar">
                            Enviar solicitud                     
                        </button>
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
export default {
    name: "Repuestos",
    components:{
        Loader,
        Whatsapp,
        Footer,
        Menu
    },
    data(){
      return{
        nombre:'',
        email:'',
        fono:'',
        partnumber:'',
        msg:'',
        
      }
    },
    methods:{
        preparar(nombre, msg, email, fono, partnumber){
            this.nombre = nombre
            this.msg = msg
            this.email = email
            this.fono = fono
            this.partnumber = partnumber
            var d1 = document.getElementById('enviar');
            var f1= document.getElementById("formulario");
           
                d1.innerHTML=""
                d1.insertAdjacentHTML('beforeend', '<span class="spinner-border spinner-border-sm"></span> Enviando...');
                /* SecureToken : "033c7d2a-5790-44a6-ae5c-8529bad34388", */
                Email.send({
                Host : "mail.supplylog.cl",
                Username : "contacto@supplylog.cl",
                Password : "*#zde*ds!EC*",
                To : 'mery.fontalvo@supplylog.cl',
                Bcc : 'contactform@supplylog.cl',
                From : "contacto@supplylog.cl",
                Subject : "Formulario de Contacto",
                Body : "Este es un mensaje enviado a traves del formulario de contacto de www.supplylog.cl :" + "<br><br><br>" + "Nombre o Razon Social : " + this.nombre + "<br>" + "E-Mail : " + this.email + "<br>" + 
                        "Teléfono : " + this.fono + "<br>" + "P/N Consultado: " + this.partnumber + "<br><br>" + "Mensaje : " + this.msg
                }).then((message)=>{
                        if (message == "OK"){
                            
                            d1.innerHTML="Enviar solicitud"
                            d1.insertAdjacentHTML('afterend', '<div class="alert alert-success alert-dismissible fade show mt-3" role="alert"><strong>Su solicitud fue enviada exitosamente!</strong> Nuestro equipo se contactará en un plazo de 48 horas con Usted.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
                            f1.reset();

                        }else{
                            
                            d1.innerHTML="Enviar solicitud"
                            d1.insertAdjacentHTML('afterend', '<div class="alert alert-warning alert-dismissible fade show mt-3" role="alert"><strong>Ha ocurrido el siguiente error:</strong><p>' + message + '</p><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
                            f1.reset();
                        }
                    }
                    
                    
                );
        },
        async carga(){
            //ponemos un timeot para que se muestren los spinner
            
            this.loading = true;
            setTimeout(() => {
                //usamos el servicio para traer los datos
                this.loading = false;
            }, 1000);

        },
    },
    mounted(){
        this.carga()
        
    },
    computed:{
        habilitar(){
            return this.nombre.trim() === "" || this.email.trim() ==="" || this.fono.trim() ==="" || this.partnumber.trim() === "" ? true:false
        }
    }
}
</script>

<style>

</style>