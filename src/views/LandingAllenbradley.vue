<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-8">
                    <Whatsapp />
                    <!-- ************** Modelo Card **************************** -->
                    <div class="card text-center">
                        <div class="card-header">
                            <p><strong>Importación a pedido de Productos ALLEN BRADLEY - FactoryTalk</strong></p>
                        </div>
                        <div class="card-body">
                            <img class="card-img-top imgprov" src="../assets/img/compras/seccion2/ab.png" alt="Card image cap">
                            
                            <p class="card-text mt-3 justificar">Adquiere con nosotros todo en productos de hardware y software ALLEN BRADLEY & FACTORYTALK, Originales y Alternativos, Importados directamente de Estados Unidos, a precios competitivos - todo incluido - con un servicio completo de logística rápido y eficiente para ti y/o tu empresa.<b> Hacemos entregas en todo el país.</b></p>
                        </div>
                        <div class="card-footer text-muted">
                            <p>Para poder ayudarlo de manera óptima en su solicitud de cotización, debe proporcionarnos el <strong>NÚMERO DE PARTE O MODELO</strong> del producto en sí. Esta información es primordial para poder ayudarlo con su requerimiento.</p>
                        </div>
                    </div>
                    <!-- ******************************************************* -->
                    
                   
            </div>
            <div class="col-sm-4">
                <div class="card text-center">
                        <div class="card-header">
                            <p><strong>Puedes cotizar con nosotros: </strong></p>
                        </div>
                        <div class="card-body mt-3">
                            <p class="card-text justificar">Protección de circuitos y cargas, Monitoreo de condiciones, Dispositivos de conexión, Sistemas de control distribuidos, Variadores y motores, Monitoreo de energía, Computadoras y monitores industriales, Módulos de entrada/salida (E/S), Productos de control industrial, Fuentes de alimentación eléctrica, Controladores programables, Botones pulsadores y dispositivos de señalización, Relés y temporizadores, Sensores e interruptores.
                            </p>
                        </div>
                        <div class="card-footer text-muted">
                            <a href="/" class="btn btn-primary" target="_blank">Ir a nuestro sitio web</a>
                        </div>
                    </div>
            </div>
            <div class="row mt-5">
                    <div class="col-sm-4">
                        <ul class="list-group">
                            <li class="list-group-item active">Llámanos</li>
                            <li class="list-group-item"><img src="../assets/img/dir/whatsapp.png" alt="whatsapp" class="imgdir"><a href="tel:+56961574821">+56 9 6157 4821</a></li>
                        </ul>
                        <ul class="list-group">
                            <li class="list-group-item active">Chatea con nosotros</li>
                            <p>(Chat en esquina inferior derecha)</p> 
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <ul class="list-group">
                            <li class="list-group-item active">Escríbenos</li>
                            <li class="list-group-item"><img src="../assets/img/dir/mail.png" alt="mail" class="imgdir">contacto@supplylog.cl</li>
                        </ul>
                        <ul class="list-group">
                            <li class="list-group-item active">Contáctanos</li>
                            <li class="list-group-item"><img src="../assets/img/contact-form-icono.png" alt="contact-form-icono" class="imgdir"><a href="/Contactanos">Ir a formulario de contacto</a></li>
                    
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <div class="card-body">
                            <img class="card-img-top imgcard" src="../assets/img/landing/ab/ab1.jpg" alt="Card image cap">
                            
                        </div>
                        <div class="card-body">
                            <img class="card-img-top imgcard" src="../assets/img/landing/ab/ab2.jpg" alt="Card image cap">
                            
                        </div>
                        
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import Whatsapp from '@/components/Whatsapp.vue'
export default {
    name:"LandingAllenbradley",
    components:{
        Whatsapp
    }
}
</script>

<style>
.imgcard{
    width: 300px;
    height: 300px;
}
</style>