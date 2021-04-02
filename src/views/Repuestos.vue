<template>
  <form method="post">
     <!-- Titulo del Form -->
                        <h1>Formulario de Contacto</h1>
                        <h3>Por favor complete los datos y presione enviar.</h3>
                        <!-- Razon Social o nombre -->
                        <div class="form-group row mt-5">
                            <label for="nombre" class="col-sm-2 col-form-label">Razón Social o Nombre</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="nombre" v-model="nombre">
                            </div>
                        </div>
                        <!-- e-Mail -->
                        <div class="form-group row">
                            <label for="eMail" class="col-sm-2 col-form-label">e-Mail</label>
                            <div class="col-sm-8">
                                <input type="email" class="form-control" id="eMail" v-model="email">
                            </div>
                        </div>
                        <!-- Telefono -->
                        <div class="form-group row">
                            <label for="fono" class="col-sm-2 col-form-label">Teléfono</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="fono" v-model="fono">
                            </div>
                        </div>
                        <!-- Part Number -->
                        <div class="form-group row">
                            <label for="partnumber" class="col-sm-2 col-form-label">Part Number</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="pnumber" v-model="partnumber">
                            </div>
                        </div>
                        <!-- Mensaje -->
                        <div class="form-group mt-3">
                            <label for="msg">Escríbanos su mensaje</label>
                            <textarea class="form-control" id="mensaje" rows="3" v-model="msg"></textarea>
                        </div>
                        <!-- nombre, msg, email, fono, partnumber -->
		<input type="button" value="Send Email" @click="preparar(nombre, msg, email, fono, partnumber)"/><!-- sendEmail() -->
	</form>
</template>

<script>
export default {
    name: "Repuestos",
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
                    Host : "mail.supplylog.cl",  //smtp.yourisp.com
                    Username : "contacto@supplylog.cl",      //username
                    Password : "2E95Mm77C.xU",      //password
                    To : 'dzarate@pcfriend.cl',    //them@website.com
                    From : "contacto@supplylog.cl",       //you@isp.com
                    Subject : "Formulario de Contacto",
                    Body : `${this.nombre}, te ha enviado el siguiente mensaje: ${this.msg} <br/>El correo de ${this.nombre} es: ${this.email} y su teléfono es: ${this.fono}. <br/>Part Number consultado: ${this.partnumber}`
                    })
                    .then(function(){
                      alert("mail sent successfully")
                    });
        }
    },
    
    
}
</script>

<style>

</style>