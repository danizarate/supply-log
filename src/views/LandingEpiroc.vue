<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-8">
                    <Whatsapp />
                    <!-- ************** Modelo Card **************************** -->
                    <div class="card text-center">
                        <div class="card-header">
                            <p><strong>Importación a pedido de Repuestos y Kits EPIROC </strong></p>
                        </div>
                        <div class="card-body">
                            <img class="card-img-top imgprov" src="../assets/img/landing/epiroc/epirocLogo.png" alt="Card image cap">
                            
                            <p class="card-text mt-3">Adquiere con nosotros todo en Repuestos y Accesorios KOMATSU Originales y Alternativos, Importados directamente de Estados Unidos, a precios competitivos - todo incluido - con un servicio completo de logística rápido y eficiente para ti y/o tu empresa.  </p>
                        </div>
                        <div class="card-footer text-muted">
                            <p>Para poder ayudarlo de manera óptima en su solicitud de cotización, debe proporcionarnos el <strong>NÚMERO DE PARTE</strong> del repuesto. Esta información es primordial para poder ayudarlo con su requerimiento.</p>
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
                            <p class="card-text">Kits de mantenimiento preventivo, kits de servicio para martillos hidráulicos, Kits de servicio para accesorios de excavadora, componentes de sustitución, brocas, Kits de brocas, Tubos y barras de perforación, adaptadores de culata, Acoplamientos, Accesorios y componentes, Tubos y adaptadores para perforación en fondo, Vástagos, Abridores de orificios, Escariadores convencionales, etc.
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
                            <img class="card-img-top imgcard" src="../assets/img/landing/epiroc/epiroc1.jpg" alt="Card image cap">
                            
                        </div>
                        <div class="card-body">
                            <img class="card-img-top imgcard" src="../assets/img/landing/epiroc/epiroc2.jpg" alt="Card image cap">
                            
                        </div>
                        
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import Whatsapp from '@/components/Whatsapp.vue'
export default {
    name:"LandingEpiroc",
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