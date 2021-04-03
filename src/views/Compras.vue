<template>
    <div v-if="loading">
        
        <Loader />
    </div>
    <div v-else-if="!loading">
        <Menu />
        <!-- <Carrusel /> -->
        <div class="card bg-dark text-primary">
            <img class="card-img" src="../assets/img/compras/compras.jpg" alt="Card image">
            <div class="card-img-overlay">
              <h5 class="card-title "><h1><strong>Bienvenido a Supply Log</strong></h1></h5>
              <p class="card-text">¡Tu mejor opción para tus compras en el extranjero, donde nosotros hacemos todo por ti!</p>
              <p class="card-text"></p>
            </div>
        </div>
        <Whatsapp />
        <!-- <Modal /> -->

        <!-- ********  MODAL ********** -->
        <!-- Button trigger modal -->
        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
        Launch static backdrop modal
        </button> -->

       


        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8 mt-5">
                    
                </div>
               <!--  <div class="modal-dialog modal-dialog-centered">
                    <strong>IMPORTANTE:  
                    Por restricción aduanera, Supply Log no puede importar productos orgánicos, alimenticios, de belleza, perfumes, cosméticos y armas de fuego.
                    </strong>
                </div> -->
                <h1 class="mb-5">COMPRAS EN EL EXTRANJERO</h1>
                <div class="container parallax_uno">
                  <div class="row">
                      <div class="col-sm-auto texto_uno">
                          
                          <h3 class="mt-5">Con Supply Log puedes comprar el producto que necesites en el Extranjero, ya sea en páginas como Amazon, Ebay o cualquier otra. 
                        Te damos el mejor precio en pesos chilenos-todo incluido, hasta la puerta de tu casa, dándote un servicio todo en uno, de excelente calidad.
                    </h3>
                            </div>
                  </div>
              </div>

                <h2 class="mt-5">Podemos traer tus productos desde los siguientes sitios web: </h2>
                    
                <!-- ********************************************************************************************************* -->
             
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/compras/ali.jpg" alt="Card image cap">
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/compras/amazon.jpg" alt="Card image cap">
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/compras/bbuy.png" alt="Card image cap">
                  </div>
                </div>
              </div>

               <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/compras/byh.png" alt="Card image cap">
                  </div>
                </div>
              </div>

               <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/compras/ebay.jpg" alt="Card image cap">
                  </div>
                </div>
              </div>

               <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/compras/apple.jpg" alt="Card image cap">
                  </div>
                </div>
              </div>

               <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/compras/logitech.jpg" alt="Card image cap">
                  </div>
                </div>
              </div>

               <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/compras/newwegg.jpg" alt="Card image cap">
                  </div>
                </div>
              </div>  
                <h5 class="mt-4"><strong>IMPORTANTE:  
                    Por restricción aduanera, Supply Log no puede importar productos orgánicos, alimenticios, de belleza, perfumes, cosméticos y armas de fuego.
                    </strong>
                </h5>

                 <!-- *************************************************************************************************************** -->      
                 <hr style="color: #0056b2;" />
                  <br>
                 <br> 
                 <h1 style="text-decoration: underline"><strong>Repuestos para Vehículos</strong></h1>
                 <h5 class="mt-4"><strong>Si necesitas comprar repuestos para tu auto, puedes hacerlo con nosotros por medio de estas páginas:</strong> 
                </h5>    
                <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/compras/autos/rock.jpeg" alt="Card image cap">
                  </div>
                </div>
              </div>

               <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/compras/autos/borla.png" alt="Card image cap">
                  </div>
                </div>
              </div>

               <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/compras/autos/kyn2.png" alt="Card image cap">
                  </div>
                </div>
              </div>

               <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/compras/autos/carid.jpg" alt="Card image cap">
                  </div>
                </div>
              </div>

               <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <img class="card-img-top imgprov" src="../assets/img/compras/autos/tirerack.png" alt="Card image cap">
                  </div>
                </div>
              </div>  
             </div>  
      </div>
    </div>

    <!-- *************************************************************************************************************** -->
    <!-- ***************************************************    RRSS   ************************************************* -->
   
    <hr style="color: #0056b2;" />
      
        <div class="container mt-5">
            <div class="row">
                
                    
            </div>
        </div>    
        <Footer />
                
    
</template>

<script>
import Loader from '@/components/Loader.vue'
import Whatsapp from '@/components/Whatsapp.vue'
import Menu from "@/components/Menu.vue"
/* import Carrusel from '@/components/Carrusel.vue' */
/* import Modal from '@/components/Modal.vue' */
import Footer from '@/components/Footer.vue'
export default {
    name:"Compras",
    components:{
        Loader,
        Whatsapp,
        Menu,
        /* Carrusel, */
        /* Modal, */
        Footer
    },

    data(){
        return{
            loading:false,
            nombre: '',
            email: '',
            fono: '',
            partnumber : '',
            msg: ''
           /*  showModal : true */
        }
    },
    methods:{
       
        async carga(){
            //ponemos un timeot para que se muestren los spinner
            
            this.loading = true;
            setTimeout(() => {
                //usamos el servicio para traer los datos
                this.loading = false;
                /* this.Modal.toggle = "modal"
                this.Modal.target = "#staticBackdrop" */
                /* data-toggle="modal" data-target="#staticBackdrop" */
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
.parallax_uno{
  width: 100%;
  height: 100vh;
  background-image: url(../assets/img/compras/parallax1.jpg);
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
.parallax_dos{
  width: 100%;
  height: 100vh;
  background-image: url(../assets/img/compras/parallax21.jpg);
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
dd{
  text-decoration: underline;
}
</style>