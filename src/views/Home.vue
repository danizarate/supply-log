<template>
  
  <div class="home">
      <div v-if="loading">
        
        <Loader />
    </div>
    <div v-else-if="!loading">

     
      <Menu />
      <!-- <Carrusel /> -->
      <Whatsapp />
      
      <!-- Imagen-1 Fondo de pantalla -->
      
        
        <div class="card bg-dark text-primary">
            <img class="card-img" src="../assets/img/carrusel/par1.png" alt="Card image">
            <div class="card-img-overlay">
              <h5 class="card-title "><h1><strong>Bienvenido a Supply Log</strong></h1></h5>
              <p class="card-text">¡Tu mejor opción para tus compras en el extranjero, donde nosotros hacemos todo por ti!</p>
              <p class="card-text"></p>
            </div>
        </div>


        <HelloWorld msg="Lo necesitas; lo tienes" class="mt-5" />
        
     

      <h2></h2>

        <div class="container mt-5">
          <div class="row">

              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top" src="../assets/img/L1-1.jpg" alt="Card image cap">
                    <h5 class="card-title">Compramos por ti, desde donde tu   quieras.</h5>
                    <p class="card-text">Compra lo que quieras en Amazon, eBay, y muchas más.</p>
                    <a href="/Compras" class="btn btn-primary">Ir a Compras</a>
                  </div>
                  
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top" src="../assets/img/L1-2.jpg" alt="Card image cap">
                    <h5 class="card-title">Repuestos industriales a pedido.</h5><br>
                    <p class="card-text">(informando el número de parte)</p><br>
                    <a href="/Repuestos" class="btn btn-primary">Ir a Repuestos</a>
                    <!--  <div class="card-footer">
                    <small class="text-muted"><strong>Importante: </strong>Informando número de parte</small>
                  </div> -->
                  </div>
                  
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top" src="../assets/img/L1-3.jpg" alt="Card image cap">
                    <h5 class="card-title">Todo tipo de productos, para ti o tu empresa.</h5>
                    <p class="card-text">Los mejores precios con la mejor logistica</p><br>
                    <a href="/Contactanos" class="btn btn-primary">Contactanos</a>
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

              <div class="container parallax1">
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
    <!-- 
    <div class="container mt-3">
      <div class="row">
        <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top" src="../assets/img/L2-1.jpg" alt="Card image cap">
                    <h5 class="card-title">Importación Repuestos para tu Industria.</h5>
                    <p class="card-text">A pedido de Estados unidos, donde contamos con nuestro propio warehouse.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                  
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top" src="../assets/img/L2-2.jpg" alt="Card image cap">
                    <h5 class="card-title">Las mejores marcas.</h5>
                    <p class="card-text"><br><br>Precios competitivos para tu negocio.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                  
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top" src="../assets/img/L2-3.jpg" alt="Card image cap">
                    <h5 class="card-title">Todo tipo de productos para tu rubro.</h5>
                    <p class="card-text">Importamos todo lo que necesites, ya seas cliente natural o empresa.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                  
                </div>
              </div>
      </div>
    </div>
 -->
 <!-- 
    <div class="container">
      <div class="row mt-5">
          <h1 style="margin:0 auto;">¿Qué nos hace diferentes al resto?</h1>
      </div>


       <div class="container parallax2 mt-5">
            <div class="row">
              <div class="col-sm-auto texto_uno">
                  <h3>Nos hace diferente nuestra amplia experiencia en el mercado de la importación y exportación,
                      haciendo de la logística nuestro gran valor agregado; esto, es lo que nos hace mucho más
                      rápidos y eficaces.</h3><br>
                  <p>donde hacemos la compra por ti, del producto que desees, dándote
                    un precio en pesos chilenos, donde se incluye además del pago de tu producto,
                    toda la logística internacional y local, entregándote el producto en tus manos,
                    sin que tengas que preocuparte por nada.</p>
                  <h3>Además, contamos con una gran cartera de
                      proveedores, lo que nos permitirá brindarte mejores precios.
                  </h3>
              </div>
            </div>
        </div>

 -->






      <!-- <div class="row mt-2">
          <h3>Nos hace diferente nuestra amplia experiencia en el mercado de la importación y exportación,
              haciendo de la logística nuestro gran valor agregado; esto, es lo que nos hace mucho más
              rápidos y eficaces.</h3><br/>
      </div>
      <div class="row mt-1">
          <h3>Además, contamos con una gran cartera de
          proveedores, lo que nos permitirá brindarte mejores precios.</h3>
      </div> -->


    <!-- *************************************************************************************************************** -->
    <!-- ***************************************************    RRSS   ************************************************* -->
   

      <div class="row mt-5">
        <h2 style="margin:0 auto;">Algunos de nuestros proveedores</h2>
      </div>
    </div>


    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-3">
                <div class="card"> <!-- style="width: 18rem;" -->
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
            <!-- <div class="jumbotron jumbotron-fluid"> --> 
                <div class="container">
                  <h3 class="display-5">Visitanos en nuestras redes sociales</h3>

                  <a class="imgrrss" target="_Blanck" href="https://www.instagram.com/supplylogchile/">
                      <img src="../assets/img/rrss/insta.gif" alt="Instagram" class="imgrrss">
                  </a>

                  <a class="imgrrss" target="_Blanck" href="https://www.facebook.com/Supply-Log-Chile-103499568513992">
                      <img src="../assets/img/rrss/facebook.gif" alt="Facebook" class="imgrrss">
                  </a>

                 <!--  <img src="../assets/img/rrss/insta.gif" alt="..." class="imgrrss"><a href="https://www.instagram.com/supplylogchile/"></a>
                  <img src="../assets/img/rrss/facebook.gif" alt="..." class="imgrrss"> -->
                </div>
             <!--  </div> -->
        </div>
      </div>
    </div>

    <hr style="color: #0056b2;" /> <!-- Crea divisor -->

    <Footer />
   
</div>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Whatsapp from '@/components/Whatsapp.vue'
/* import Carrusel from '@/components/Carrusel.vue' */
import Loader from '@/components/Loader.vue';
import Menu from "@/components/Menu.vue"
import Footer from '@/components/Footer.vue'
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
        Whatsapp,
        /* Carrusel, */
        Loader,
        Footer
    },
    methods:{
     
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
    }
}

</script>

<style>

.parallax1{
  width: 100%;
  height: 100vh;
  background-image: url(../assets/img/19.jpg);
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

.parallax2{
  width: 100%;
  height: 100vh;
  background-image: url(../assets/img/bn.jpg);
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
  width: 150px;
  height: 150px;
}

.imgprov{
  width: 100px;
  height: 100px;
  
}

</style>
