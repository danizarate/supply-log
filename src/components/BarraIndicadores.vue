<template>
  <!-- NAVBAR PARA LOS INDICADORES ECONOMICOS -->
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <!-- <a class="navbar-brand"> -->
    <router-link to="#" class="navbar-brand">
      <!-- <img src="../assets/img/bender_icono.png" width="30" height="30" class="d-inline-block align-top" alt="..." loading="lazy"/> -->
      Indicadores Economicos del dia {{this.fechaUSD}}
    </router-link>
    <!-- </a> -->

    <!-- Toggler/collapsibe Button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar links -->
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="https://si3.bcentral.cl/Bdemovil/BDE/IndicadoresDiarios">USD$ {{valorUSD}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://si3.bcentral.cl/Bdemovil/BDE/IndicadoresDiarios">Euro$ {{valorEuro}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.bankofengland.co.uk/boeapps/database/Rates.asp?Travel=NIxIRx&into=GBP">GBP$ {{ totalGBP }}</a> <!-- toFixed((parseFloat(valorUSD) * valorGBP[1]),2) -->
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.bankofengland.co.uk/boeapps/database/Rates.asp?Travel=NIxIRx&into=GBP">Props {{ USD }}</a> 
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import ServicioDatos from "../services/ServicioDatos";
export default {
    name:"Indicadores",
    components:{
    /* Añade aqui los componentes necesarios */
    
    },
   props:['USD'],
    data(){
        return{
            usdArray:[],
            euroArray:[],
            gbpArray:[],
            fechaUSD: String,
            valorUSD: String,
            fechaEuro: String,
            valorEuro: String,
            fechaGBP: String,
            valorGBP: String,
            totalGBP: null

        }
    },
    methods:{
        async obtenerUSD(){
            setTimeout(()=>{
                let servicio = new ServicioDatos();
                servicio.getUSD().then(response =>{
                    return response.json();
                })
                .then(this.procesarUSD).catch(error =>{
                    console.log('Error en lectura de API USD '+ error)
                })
            }, 1000)
        },

        async obtenerEuro(){
            setTimeout(()=>{
                let servicio = new ServicioDatos();
                servicio.getEuro().then(response =>{
                    return response.json();
                })
                .then(this.procesarEuro).catch(error =>{
                    console.log('Error en lectura de API EUR '+ error)
                })
            }, 1000)
        },

        async obtenerGBP(){
                let servicio = new ServicioDatos();
                servicio.getGBP().then(response =>{
                    return response.json();
                })
                .then(this.procesarGBP).catch(error =>{
                    console.log('Error en lectura de API GBP '+ error)
                })
        },

        /* evento(){
          console.log('el USD es: '+this.valorUSD)
          this.$emit('valorDolar', this.valorUSD);
        }, */

        procesarUSD(response){
            this.usdArray = response;
            this.fechaUSD = this.usdArray.Dolares[0].Fecha
            this.valorUSD = this.usdArray.Dolares[0].Valor.toString()
            if (this.valorUSD.length>0){
              this.$emit('valorDolar', this.valorUSD)
            }
            
        },

        procesarEuro(response){
            this.euroArray = response;
            this.fechaEuro = this.euroArray.Euros[0].Fecha
            this.valorEuro = this.euroArray.Euros[0].Valor
        
        },

        procesarGBP(response){
            this.gbpArray = response;
            this.fechaGBP = this.gbpArray.dataset.data[0]
            this.valorGBP = this.gbpArray.dataset.data[1]
            this.totalGBP = parseFloat(this.valorUSD).toFixed(2) * parseFloat(this.valorGBP[1]).toFixed(2)
            this.totalGBP = this.totalGBP.toFixed(2)
        }
    },
    mounted(){
        this.obtenerUSD(); // Llama a la funcion ObtenerUSD para inicializar el proceso
        this.obtenerEuro();
        this.obtenerGBP();
        /* this.evento(); */
        
        
    },
    
}


</script>

<style>

</style>