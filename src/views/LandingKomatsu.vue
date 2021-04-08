<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-8">
                    <Whatsapp />
                    <!-- ************** Modelo Card **************************** -->
                    <div class="card text-center">
                        <div class="card-header">
                            <p><strong>Importación a pedido de Repuestos y Accesorios KOMATSU</strong></p>
                        </div>
                        <div class="card-body">
                            <img class="card-img-top imgprov" src="../assets/img/compras/seccion2/komatsu.png" alt="Card image cap">
                            
                            <p class="card-text mt-3 justificar">Adquiere con nosotros todo en Repuestos y Accesorios KOMATSU Originales y Alternativos, Importados directamente de Estados Unidos, a precios competitivos - todo incluido - con un servicio completo de logística rápido y eficiente para ti y/o tu empresa. Hacemos entregas en todo el país.
                                                    Consulte más marcas de Komatsu: Bomag, Manitou, Gorman-Rupp Pumps, Hensley, D’AVINO. 
                            </p>
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
                            <p class="card-text justificar">Repuestos y Accesorios de todo tipo: Repuestos de Turbo-Cargadores Komatsu, Repuestos para Bombas Hidráulicas y Motores, Repuestos para Inyectores de Combustible y Bombas, Repuestos para Motoniveladoras, Repuestos para Excavadores, Repuestos de Montacargas, etc. Discos de fricción, Radiadores, Bombas hidráulicas, Herramientas de Corte, Engranajes y ejes, Cigüeñales, Discos de fricción, Radiadores, Bombas hidráulicas, Filtros.
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
                            <img class="card-img-top imgcard" src="../assets/img/landing/komatsu/komatsu1.jpg" alt="Card image cap">
                            
                        </div>
                        <div class="card-body">
                            <img class="card-img-top imgcard" src="../assets/img/landing/komatsu/komatsu2.jpg" alt="Card image cap">
                            
                        </div>
                        
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import Whatsapp from '@/components/Whatsapp.vue'
export default {
    name:"LandingKomatsu",
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