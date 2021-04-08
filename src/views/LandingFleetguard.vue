<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-8">
                    <Whatsapp />
                    <!-- ************** Modelo Card **************************** -->
                    <div class="card text-center">
                        <div class="card-header">
                            <p><strong>Importación a pedido de Repuestos y Filtros CUMMINS - FLEETGUARD</strong></p>
                        </div>
                        <div class="card-body">
                            <img class="card-img-top imgprov" src="../assets/img/proveedores/cummins.jpg" alt="Card image cap">
                            
                            <p class="card-text mt-3 justificar">Adquiere con nosotros todo en Repuestos, motores y Filtros CUMMINS (También conocidos como FLEETGUARD), Originales y Alternativos, Importados directamente de Estados Unidos, a precios competitivos - todo incluido - con un servicio completo de logística rápido y eficiente para ti y/o tu empresa.<b> Hacemos entregas en todo el país.</b> </p>
                        </div>
                        <div class="card-footer text-muted">
                            <p>Para poder ayudarlo de manera óptima en su solicitud de cotización, debe proporcionarnos el <strong>NÚMERO DE PARTE</strong> del repuesto. <b>Esta información es primordial para poder ayudarlo con su requerimiento.</b></p>
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
                            <p class="card-text justificar">Motores, motor de partida, alternador, filtros fleetguard, Sistema de filtración de agua, Sistema de filtración de combustible, Sistema de filtración de aire, Sistema de filtración hidráulico, bomba de agua, alternador, empaquetadura, enfriador de aceite, válvula admisión.
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
                            <img class="card-img-top imgcard" src="../assets/img/landing/cummins/cummins1.jpg" alt="Card image cap">
                            
                        </div>
                        <div class="card-body">
                            <img class="card-img-top imgcard" src="../assets/img/landing/cummins/cummins-fleetguard.jpg" alt="Card image cap">
                            
                        </div>
                        
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import Whatsapp from '@/components/Whatsapp.vue'
export default {
    name:"LandingFleetguard",
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