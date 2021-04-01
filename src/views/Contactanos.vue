<template>
    <div v-if="loading">
        
        <Loader />
    </div>
    <div v-else-if="!loading">
        <Menu />
        <Carrusel />
        <Whatsapp />
        <div class="container">
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8">
                    <!-- onsubmit="return Comprobar(this)" -->
                    <form method="POST"> <!-- class="contact-form" -->
                        <!-- Titulo del Form -->
                        <h1>Formulario de Contacto</h1>
                        <h3>Por favor complete los datos y presione enviar.</h3>
                        <!-- Razon Social o nombre -->
                        <div class="form-group row mt-5">
                            <label for="nombre" class="col-sm-2 col-form-label">Razón Social o Nombre</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="nombre">
                            </div>
                        </div>
                        <!-- e-Mail -->
                        <div class="form-group row">
                            <label for="eMail" class="col-sm-2 col-form-label">e-Mail</label>
                            <div class="col-sm-8">
                                <input type="email" class="form-control" id="eMail">
                            </div>
                        </div>
                        <!-- Telefono -->
                        <div class="form-group row">
                            <label for="fono" class="col-sm-2 col-form-label">Teléfono</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="fono">
                            </div>
                        </div>
                        <!-- Part Number -->
                        <div class="form-group row">
                            <label for="pnumber" class="col-sm-2 col-form-label">Part Number</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="pnumber">
                            </div>
                        </div>
                        <!-- Mensaje -->
                        <div class="form-group mt-3">
                            <label for="mensaje">Escríbanos su mensaje</label>
                            <textarea class="form-control" id="mensaje" rows="3"></textarea>
                        </div>
                        <!-- Boton submit -->
                        <button type="submit" class="btn btn-primary" onclick="submitForm()">Enviar</button>
                        <!-- Boton limpiar -->
                        <button type="reset" class="btn btn-primary ml-3">limpiar</button>
                        <!-- Boton cancelar -->
                        <button type="button" class="btn btn-primary ml-3">Volver a Home</button>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Loader from '@/components/Loader.vue'
import Whatsapp from '@/components/Whatsapp.vue'
import Menu from "@/components/Menu.vue"
import Carrusel from '@/components/Carrusel.vue'
export default {
    name:"Contactanos",
    components:{
        Loader,
        Whatsapp,
        Menu,
        Carrusel
    },
    data(){
        return{
            loading:false
           
        }
    },
    methods:{
        async carga(){
            //ponemos un timeot para que se muestren los spinner
            
            this.loading = true;
            setTimeout(() => {
                //usamos el servicio para traer los datos
                this.loading = false;
                /* Document.querySelector(".contact-form").addEventListener("submit", this.submitForm()); */
            }, 1000);
        },
        /* 
        Comprobar(obj){
            return true 
        }, */
        submitForm(e){
            e.preventDefault();
            console.log("llegue aca")
            let name = document.querySelector("nombre").value;
            let mail = document.querySelector("eMail").value;
            let fono = document.querySelector("fono").value;
            let pn = document.querySelector("pnumber").value;
            let msg = document.querySelector("mensaje").value;
            
            this.sendEmail(name, mail, fono, pn, msg)
        },
        sendEmail(nombre, mail, fono, partnumber, mensaje){
            Email.send({
            Host : "srv12.cpanelhost.cl",  //smtp.yourisp.com
            Username : "contacto@smart-net.cl",      //username
            Password : "rHp?_^Z63#jZ",      //password
            To : 'dzarate@pcfriend.cl',    //them@website.com
            From : "contacto@smart-net.cl",       //you@isp.com
            Subject : "Formulario de Contacto",
            Body : `${nombre}, te ha enviado el siguiente mensaje: ${mensaje} <br/>El correo de ${nombre} es: ${mail} y su teléfono es: ${fono}. <br/>Part Number consultado: ${partnumber} `
            }).then(
                message => alert(message)
            );

        }
        
    },
    mounted(){
        this.carga()
    }
}
</script>

<style>

</style>