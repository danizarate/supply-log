<template>
  
  <div class="home">
      <div v-if="loading">
        
        <Loader />
    </div>
    <div v-else-if="!loading">

    
      <Menu />

        <!-- Imagen-1 Fondo de pantalla -->
        <div class="card bg-dark text-primary">
            <img class="card-img" src="../assets/img/imagen1.jpg" alt="Card image">
            <div class="card-img-overlay">
              <h5 class="card-title "><h1><strong>Bienvenido a Supply Log</strong></h1></h5>
              <p class="card-text">¡Tu mejor opción para tus compras en el extranjero, donde nosotros hacemos todo por ti!</p>
              <p class="card-text"></p>
            </div>
        </div>


        <HelloWorld msg="Lo necesitas; lo tienes!!!" class="mt-5" />
  
     

      <h2></h2>

        <div class="container mt-5">
          <div class="row">

              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top" src="../assets/img/L1-1.jpg" alt="Card image cap">
                    <h5 class="card-title">Compramos por ti, desde donde tu   quieras.</h5>
                    <p class="card-text">Adquiere lo que quieras, de páginas web como Amazon, eBay, etc.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                  
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top" src="../assets/img/L1-2.jpg" alt="Card image cap">
                    <h5 class="card-title">Repuestos industriales mucho más, a pedido.</h5>
                    <p class="card-text">Importación de Repuestos Importación de Repuestos con número de parte.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                  
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top" src="../assets/img/L1-3.jpg" alt="Card image cap">
                    <h5 class="card-title">Todo tipo de productos, para ti o tu empresa.</h5>
                    <p class="card-text">Buscamos los mejores precios, con una rápida logística.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                  
                </div>
              </div>
              <!-- 
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top" src="../assets/img/L1-4.jpg" alt="Card image cap">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
              </div>

               -->

              <div class="mt-5"><h2>¿Quieres comprar sin tener que hacerte cargo de todos los
                detalles? Estas en el lugar adecuado.</h2></div>

              <!-- Imagen-1 Fondo de pantalla -->
              <!-- 
              <div class="card bg-dark text-white parallax_uno" style="padding: 0;">
                  <img class="card-img" src="../assets/img/image2.jpg" alt="Card image">
                  <div class="card-img-overlay mt-5">
                    <h5 class="card-title">Brindamos un servicio <strong>All Included</strong></h5>
                    <p class="card-text">donde hacemos la compra por ti, del producto que desees, dándote
                      un precio en pesos chilenos, donde se incluye además del pago de tu producto,
                      toda la logística internacional y local, entregándote el producto en tus manos,
                      sin que tengas que preocuparte por nada.</p>
                    <p class="card-text"></p>
                  </div>
              </div>

               -->

              <!-- PARALLAX-1 -->

              <div class="container parallax_uno">
                  <div class="row">
                      <div class="col-sm-auto texto_uno">
                          <p>Brindamos un servicio <strong>All Included</strong></p>
                          <p>donde hacemos la compra por ti, del producto que desees, dándote
                            un precio en pesos chilenos, donde se incluye además del pago de tu producto,
                            toda la logística internacional y local, entregándote el producto en tus manos,
                            sin que tengas que preocuparte por nada.</p>
                            </div>
                  </div>
              </div>



            </div>
            
    <!-- LANDING-1 -->

    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top" src="../assets/img/L2-1.jpg" alt="Card image cap">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                  
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top" src="../assets/img/L2-2.jpg" alt="Card image cap">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                  
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top" src="../assets/img/L2-3.jpg" alt="Card image cap">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                  
                </div>
              </div>
      </div>
    </div>

    <div class="container">
      <div class="row mt-5">
          <h1>¿Qué nos hace diferentes al resto?</h1>
      </div>
      <div class="row mt-2">
          <h3>Nos hace diferente nuestra amplia experiencia.
              Somos parte de AirSea-Log Chile, quien lleva muchos años en el
              mercado del transporte internacional, lo que nos hace mucho más
              eficaces y
              rápidos, haciendo de la logística nuestro gran valor agregado.</h3>
      </div>
      <div class="row mt-1">
          <h3>Además, contamos con una gran cartera de
          proveedores, lo que nos permitirá brindarte mejores precios.</h3>
      </div>


    <!-- *************************************************************************************************************** -->
    <!-- ***************************************************    RRSS   ************************************************* -->
   

      <div class="row mt-5">
        <h2>Nuestros Proveedores</h2>
      </div>
    </div>


    <div class="container mt-3">
      <div class="row">
        <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/proveedores/cummins.jpg" alt="Card image cap">
                    <!-- <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a> -->
                  </div>
                 
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/proveedores/komatsu.jpg" alt="Card image cap">
                   <!--  <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    -->
                  </div> 
                  
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/proveedores/Fluke-1.jpg" alt="Card image cap">
                    <!-- <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a> -->
                  </div>
                  
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/proveedores/cat.jpg" alt="Card image cap">
                    <!-- <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a> -->
                  </div>
                  
                </div>
              </div>
              
      </div>

  



    </div>


    <div class="container mt-3">
      <div class="row">
        <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/proveedores/deere.jpg" alt="Card image cap">
                    <!-- <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a> -->
                  </div>
                  <!-- <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </div> -->
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/proveedores/holland.jpg" alt="Card image cap">
                   <!--  <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a> -->
                  </div>
                  <!-- <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </div> -->
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/proveedores/case.jpg" alt="Card image cap">
                    <!-- <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a> -->
                  </div>
                 <!--  <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </div> -->
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/proveedores/atlas.jpg" alt="Card image cap">
                   <!--  <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a> -->
                  </div>
                  <!-- <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </div> -->
                </div>
              </div>
              
      </div>
    </div>

    <!-- *************************************************************************************************************** -->
    <!-- ***************************************************    RRSS   ************************************************* -->
   

    <hr style="color: #0056b2;" />

    <div class="container">
      <div class="row">
        <div class="col">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h3 class="display-5">Visitanos en nuestras redes sociales</h3>
                  <img src="../assets/img/rrss/insta.gif" alt="..." class="imgrrss">
                  <img src="../assets/img/rrss/facebook.gif" alt="..." class="imgrrss">
                </div>
              </div>
        </div>
      </div>
    </div>

    <hr style="color: #0056b2;" /> <!-- Crea divisor -->

    <!-- *************************************************************************************************************** -->
    <!-- ***********************************************    Footer de la pagina   ************************************** -->


    <div class="container mx-2">
        <div class="row">
            <div class="col-sm-4 mt-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.073905524849!2d-70.61285898426549!3d-33.42131750340486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf663aecd2ef%3A0x91d5603472c75083!2sNueva%20de%20Lyon%2072%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1617036302793!5m2!1ses!2scl"
                 width="300" height="300" style="border:2px solid black;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="col-sm-6 mx-2">
              <h3><strong>Supply-Log</strong></h3>
              <div class="row mt-3">
                  <h5 class="izq">Nueva de Lyon 72 - Oficina 1501</h5>
                  <h5 class="izq">Providencia - Region Metropolitana - Chile</h5>
              </div>
              <div style="text-align: left">
                  <img src="../assets/img/dir/telefono.png" alt="fono" class="imgdir">+56 2 222 22 22
              </div>
              <div style="text-align: left">
                  <img src="../assets/img/dir/whatsapp.png" alt="whatsapp" class="imgdir">+56 (9) XXX XX XX
              </div>
              <div style="text-align: left">
                  <img src="../assets/img/dir/www.png" alt="web" class="imgdir">www.supply-log.com
              </div>
              <div style="text-align: left">
                  <img src="../assets/img/dir/mail.png" alt="mail" class="imgdir">contacto@supply-log.com
              </div>  
                
                
              
            </div>
            
        </div>
        
    </div>

</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Loader from '@/components/Loader.vue';
import Menu from "@/components/Menu.vue"
export default {
 data(){
        return{
            loading: false
        }
    },
    created(){
        //validamos si existe parametro o no
       
    },
    components:{
        HelloWorld,
        Menu,
        Loader
    },
    methods:{
     
        async carga(){
            //ponemos un timeot para que se muestren los spinner
            this.loading = true;
            setTimeout(() => {
                //usamos el servicio para traer los datos
              this.loading = false;
                
            }, 1000);
            console.log(this.loading)
        },
       
    },
    mounted(){
        this.carga()
    }
}

</script>

<style>

.parallax_uno{
  width: 100%;
  height: 100vh;
  background-image: url(../assets/img/image2.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex; /* Se utilizara FlexBox para poder manipular los demas objetos como el texto*/
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: yellow;
  /*position: fixed;*/
}

.texto_uno{
  background-color: rgba(0, 0, 0, 0.5);
  padding: 18px;
  width:fit-content;
  text-align: center;
  color: white;
}

.img1{
  width: 100%;
  height: 400px;
}
.logonav{
  padding-left: 5px;
}
.bkg{
  background-image: url("../assets/img/image1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid black;
  width: 100%;
  height: 400px;
  
}
.stycard{
  display: flex;
  align-items: flex-end;
}
.l1Style{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-start;
}
.mapa{
  width: 200px;
  height: 200px;
}
.izq{
  text-align: left;
}
.imgdir{
  width: 60px;
  height: 60px;
  margin-left: 0px;
  padding-left: 0px;
  
}
.imgrrss{
  width: 100px;
  height: 100px;
}

.imgprov{
  width: 100px;
  height: 100px;
}

</style>
