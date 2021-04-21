<template>
  <Menu />
  <BarraIndicadores  @valorDolar = "USD_valor=$event" />
  
  <div class="container">
      <div class="row mt-5">
          <div class="col">
              <h1>Cotizador Supply Log </h1>
             
          </div>
      </div>
      <div class="row mt-5">
          <div class="col-sm-12">
               <div class="panel panel-primary border p-2 mt-3">
                    <div class="panel-body">
                    <h4 class="text-on-pannel text-primary"><strong class="text-uppercase"> Identificación </strong></h4>
                    <div class="table-responsive">
                        <table class="table-responsive table-sm">
                            <tr>
                                <th>Producto</th>
                                <th>Valor Producto </th>
                                <th>% Recargo</th>
                                <th>Sub-Total</th>
                            </tr>
                            <tr>
                                <td><input type="text" class="form-control" id="producto" v-model="producto"></td>
                                <td><input type="number" class="form-control" id="valor" step="0.01" v-model="valorProducto" v-on:keyup.enter="fila1(valorProducto, recargo)" @click="fila1(valorProducto, recargo)"></td>
                                <td><input type="number" class="form-control" id="recargo" step="0.01" placeholder="20" v-model="recargo" v-on:keyup.enter="fila1(valorProducto, recargo)" @click="fila1(valorProducto, recargo)"></td>
                                <td><input type="number" class="form-control" id="subtotal1" step="0.01" v-model="subtotal1" readonly></td>
                            </tr>
                            <tr>
                                <td><h5>Valor dolar recargado:  {{(parseFloat(USD_valor) * 1.1).toFixed(2) }}</h5></td>
                            </tr>
                        </table>
                    </div>
                   
                    </div>
                    <!-- **************************************************************************************
                    ******************************  DIMENSIONES DEL PRODUCTO ******************************** -->
                    <div class="panel panel-primary border p-2 mt-3">
                    <div class="panel-body">
                    <h4 class="text-on-pannel text-primary"><strong class="text-uppercase"> Volumen de la Carga </strong></h4>
                    <div class="table-responsive">
                            <table class="table-responsive table-sm">
                                <tr>
                                    <th>Peso KG</th>
                                    <th>Largo (mts.)</th>
                                    <th>Ancho (mts.)</th>
                                    <th>Alto (mts.)</th>
                                    <th>Kilo Volumetrico</th>
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="pesoxKilo" step="0.01" v-model="pesoxKilo" v-on:keyup.enter="fila2(pesoxKilo, largo, ancho, alto)" @click="fila2(pesoxKilo, largo, ancho, alto)"></td>
                                    <td><input type="number" class="form-control" id="largo" step="0.01" v-model="largo" v-on:keyup.enter="fila2(pesoxKilo, largo, ancho, alto)" @click="fila2(pesoxKilo, largo, ancho, alto)"></td>
                                    <td><input type="number" class="form-control" id="ancho" step="0.01" v-model="ancho" v-on:keyup.enter="fila2(pesoxKilo, largo, ancho, alto)" @click="fila2(pesoxKilo, largo, ancho, alto)"></td>
                                    <td><input type="number" class="form-control" id="alto" step="0.01" v-model="alto"  v-on:keyup.enter="fila2(pesoxKilo, largo, ancho, alto)" @click="fila2(pesoxKilo, largo, ancho, alto)"></td>
                                    <td><input type="number" class="form-control" id="kiloVol" step="0.01" v-model="kiloVol" readonly></td>
                                </tr>
                                
                            </table>
                        </div>
                    </div>
                    </div>
                    <!-- **************************************************************************************
                    ******************************  ADUANA ******************************** -->
                    <div class="panel panel-primary border p-2 mt-3">
                    <div class="panel-body">
                    <h4 class="text-on-pannel text-primary"><strong class="text-uppercase"> Impuestos, Seguros y Otros </strong></h4>
                    <!-- <div class="table-responsive"> -->
                        <div class="container">
                            <div class="form-group row">
                                <label for="kilosAduana" class="col-sm-2 col-form-label">Kilos / Volumen</label>
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" id="kilosAduana"  placeholder="0" v-model="kilosAduana" readonly>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="honorariosA" class="col-sm-2 col-form-label">Honorarios Agente Aduana</label>
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" id="honorariosA"  placeholder="0" v-model="honorarios" readonly>
                                </div>
                            </div>



                            <table class="table-responsive table-sm" >
                                <tr>
                                    <th>Delivery Origen USA</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total Delivery</th>
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="delivery" step="0.01" v-model="delivery" v-on:keyup.enter="fila3(drecargo)" @click="fila3(drecargo)"></td>
                                    <td><input type="number" class="form-control" id="warehouse" step="0.01" v-model="drecargo"  v-on:keyup.enter="fila3(drecargo)" @click="fila3(drecargo)"></td>
                                    <td><input type="number" class="form-control" id="subDelivery" step="0.01" v-model="subDelivery" disabled='true' readonly></td>
                                </tr>
                                
                            </table>

                            <table class="table-responsive table-sm mt-2">
                                <tr>
                                    <th>Warehouse Mia</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total Warehouse</th>
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="warehouse" step="0.01" v-model="warehouse" v-on:keyup.enter="fila4(wrecargo)" @click="fila4(wrecargo)"></td>
                                    <td><input type="number" class="form-control" id="wrecargo" step="0.01" v-model="wrecargo"  v-on:keyup.enter="fila4(wrecargo)" @click="fila4(wrecargo)"></td>
                                    <td><input type="number" class="form-control" id="wsubtotal" step="0.01" v-model="wsubtotal" disabled='true' readonly></td>
                                </tr>

                                
                            </table>
                            <table class="table-responsive table-sm mt-2">
                                <tr>
                                    <th>Flete ltl</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total Flete</th>
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="fleteltl" step="0.01" v-model="fleteltl" readonly></td>
                                    <td><input type="number" class="form-control" id="frecargo" step="0.01" v-model="frecargo"  v-on:keyup.enter="fila5(frecargo)" @click="fila5(frecargo)"></td>
                                    <td><input type="number" class="form-control" id="fsubtotal" step="0.01" v-model="fsubtotal" disabled='true' readonly></td>
                                </tr>
                            </table>   
                            <table class="table-responsive table-sm mt-2">
                                <tr>
                                    <th>Seguro</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total Seguro</th>
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="seguro" step="0.01" v-model="seguro" readonly></td>
                                    <td><input type="number" class="form-control" id="srecargo" step="0.01" v-model="srecargo"  v-on:keyup.enter="fila6(srecargo)" @click="fila6(srecargo)"></td>
                                    <td><input type="number" class="form-control" id="ssubtotal" step="0.01" v-model="ssubtotal" disabled='true' readonly></td>
                                </tr>
                            </table>   
                            <table class="table-responsive table-sm mt-2">
                                <tr>
                                    <th>Arancel 6% s/cif</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total Arancel</th>
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="arancel" step="0.01" v-model="arancel" readonly></td>
                                    <td><input type="number" class="form-control" id="arecargo" step="0.01" v-model="arecargo"  v-on:keyup.enter="fila7(srecargo)" @click="fila7(srecargo)"></td>
                                    <td><input type="number" class="form-control" id="asubtotal" step="0.01" v-model="asubtotal" disabled='true' readonly></td>
                                </tr>
                                <tr><br></tr>
                                <tr><br></tr>
                            </table>
                            <table class="table-responsive table-sm mt-2">
                                <tr>
                                    <th>IVA 19% </th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total IVA</th>
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="iva" step="0.01" v-model="iva" readonly></td>
                                    <td><input type="number" class="form-control" id="irecargo" step="0.01" v-model="irecargo" readonly></td>
                                    <td><input type="number" class="form-control" id="isubtotal" step="0.01" v-model="isubtotal" disabled='true' readonly></td>
                                </tr>
                            </table>    
                        </div>
                    </div>
                    </div>
                    <!-- </div> -->
                    
                     <!-- **************************************************************************************
                    ******************************  FLETE ******************************** -->
                     <div class="panel panel-primary border p-2 mt-5 mb-3">
                    <div class="panel-body">
                    <h4 class="text-on-pannel text-primary"><strong class="text-uppercase"> Gastos de Despacho </strong></h4>
                    <div class="table-responsive">
                        <table class="table-responsive table-sm p-2">
                                <tr>
                                    <th>Gastos Aduana</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total</th>
                                   
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="gaduana" step="0.01" v-model="gaduana" v-on:keyup.enter="fila8(gaduana, garecargo)" @click="fila8(gaduana, grecargo)"></td>
                                    <td><input type="number" class="form-control" id="garecargo" step="0.01" v-model="garecargo" v-on:keyup.enter="fila8(gaduana, garecargo)" @click="fila8(gaduana, grecargo)"></td>
                                    <td><input type="number" class="form-control" id="gasubtotal" step="0.01" v-model="gasubtotal" readonly></td>
                                    
                                </tr>
                                
                            </table>
                            <table class="table-responsive table-sm p-2">
                                <tr>
                                    <th>Honorarios Agente Aduana</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total</th>
                                   
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="hagaduana" step="0.01" v-model="hagaduana" v-on:keyup.enter="fila9(hagaduana, hagrecargo)" @click="fila9(hagaduana, hagrecargo)"></td>
                                    <td><input type="number" class="form-control" id="hagrecargo" step="0.01" v-model="hagrecargo" v-on:keyup.enter="fila9(hagaduana, hagrecargo)" @click="fila9(hagaduana, hagrecargo)"></td>
                                    <td><input type="number" class="form-control" id="hagsubtotal" step="0.01" v-model="hagsubtotal" readonly></td>
                                    
                                </tr>
                                
                            </table>
                            <table class="table-responsive table-sm p-2">
                                <tr>
                                    <th>Delivery SCL</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total</th>
                                   
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="dscl" step="0.01" v-model="dscl" v-on:keyup.enter="fila10(dscl, sclrecargo)" @click="fila10(dscl, sclrecargo)"></td>
                                    <td><input type="number" class="form-control" id="sclrecargo" step="0.01" v-model="sclrecargo" v-on:keyup.enter="fila10(dscl, sclrecargo)" @click="fila10(dscl, sclrecargo)"></td>
                                    <td><input type="number" class="form-control" id="sclsubtotal" step="0.01" v-model="sclsubtotal" readonly></td>
                                    
                                </tr>
                            </table>
                            <table class="table-responsive table-sm p-2">
                                <tr>
                                    <th>Fee Aeropuerto</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total</th>
                                   
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="fee" step="0.01" v-model="fee" v-on:keyup.enter="fila11(fee, feerecargo)" @click="fila11(fee, feerecargo)"></td>
                                    <td><input type="number" class="form-control" id="feerecargo" step="0.01" v-model="feerecargo" v-on:keyup.enter="fila11(fee, feerecargo)" @click="fila11(fee, feerecargo)"></td>
                                    <td><input type="number" class="form-control" id="feesubtotal" step="0.01" v-model="feesubtotal" readonly></td>
                                    
                                </tr>
                            </table>
                            <br>
                            <br>
                            <table class="table-responsive table-sm p-2">
                                <tr>
                                    <th>Costos Totales</th>
                                    <th></th>
                                    <th>Sub-Totales</th>
                                   
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="costoTotal" step="0.01" v-model="costoTotal" readonly></td>
                                    <td><input type="number" class="form-control" id="costoT" step="0.01" v-model="costoT"  readonly></td>
                                    <td><input type="number" class="form-control" id="costoSubtotal" step="0.01" v-model="costoSubtotal" readonly></td>
                                    
                                </tr>
                            </table>
                        </div>
                    </div>
                     </div>
                    <!-- **************************************************************************************  -->






                </div>
 
          </div>
      </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import BarraIndicadores from '@/components/BarraIndicadores.vue'
export default {
    name: "Cotizador",
    components: {
        Menu,
        BarraIndicadores
    },
    data(){
        return{
            USD_valor: '',
            f11:0,
            f2:0,
            producto:'',
            valorProducto: 0,
            recargo:0,
            subtotal1:0,

            pesoxKilo:0,
            largo:0,
            ancho:0,
            alto:0,
            kiloVol:0,

            aduanaKG:0,
            honorarios: 0,
            delivery: 0,
            drecargo: 0,
            kilosAduana:0,
            subDelivery:0,

            fleteltl:0,
            fsubtotal:0,
            wrecargo:0,
            wsubtotal:0,

            seguro:0,
            srecargo:0,
            ssubtotal:0,

            arancel:0,
            arecargo:0,
            asubtotal:0,

            iva:0,
            irecargo:0,
            isubtotal:0,

            gaduana:0,
            garecargo:0,
            gasubtotal:0,

            hagaduana:0,
            hagrecargo:0,
            hagsubtotal:0,

            dscl:0,
            sclrecargo:0,
            sclsubtotal:0,

            fee:0,
            feerecargo:0,
            feesubtotal:0,

            costoTotal:0,
            costoT:0,
            costoSubtotal:0

            
        }
    },
    methods:{
        fila1(valor, recargo){
            var f11 = (((valor * recargo)/100) + parseFloat(valor))
            this.subtotal1 = f11
            document.getElementById('subtotal1').value = f11
            document.getElementById('subtotal1').disabled = true
        },
        fila2(pesoxKilo, largo, ancho, alto){
            var f2 = parseFloat((largo * ancho * alto ) * 167)
            this.kiloVol = f2
            /* Calculo del kilosAduana */
            if(pesoxKilo > this.kiloVol){
                this.kilosAduana = pesoxKilo
                this.fsubtotal = pesoxKilo * 8
            }else{
                this.kilosAduana = this.kiloVol
                this.fsubtotal = this.kiloVol * 8
            }
            /* ***************** HONORARIOS ******************************** */
            
            this.honorarios = this.valorProducto * 0.005
            /* **************** Actualiza Flete ltl ************************/
            
            this.fleteltl = this.kilosAduana * 2.5
            
            /* ****************  SEGURO y SUBTOTALES ************************/
            var seguroAux = (parseFloat(this.valorProducto) + parseFloat(this.fleteltl)) * 1.1
            this.seguro = ((seguroAux * 0.15)/100).toFixed(2)
            var arancelAux = (parseFloat(this.valorProducto) + parseFloat(this.fleteltl)) * 1.1
            this.ssubtotal = ((arancelAux * 0.5)/100).toFixed(2)
            this.arancel = ((parseFloat(this.valorProducto) + parseFloat(this.fleteltl) + parseFloat(this.seguro)) * 0.06).toFixed(2)
            this.asubtotal =  ((parseFloat(this.subtotal1) + parseFloat(this.fsubtotal) + parseFloat(this.ssubtotal)) * 0.06).toFixed(2)
            this.iva = ((parseFloat(this.valorProducto) + parseFloat(this.fleteltl) + parseFloat(this.seguro) + parseFloat(this.arancel)) * 0.19).toFixed(2)
            this.isubtotal = ((parseFloat(this.subtotal1) + parseFloat(this.fsubtotal) + parseFloat(this.ssubtotal) + parseFloat(this.asubtotal)) * 0.19).toFixed(2)
            /* console.log(this.arancel) */

        /* **************** DELIVERY ************************/
        },
        fila3(drecargo){
             var dsubtotalAux = (parseFloat(this.delivery) * parseFloat(drecargo))/100
             this.subDelivery = (parseFloat(dsubtotalAux) + parseFloat(this.delivery)).toFixed(2)
            
        },
        /* **************** WAREHOUSE ************************/
        fila4(wrecargo){
             var wsubtotalAux = (parseFloat(this.warehouse) * parseFloat(wrecargo))/100
             this.wsubtotal = (parseFloat(wsubtotalAux) + parseFloat(this.warehouse)).toFixed(2)
            
        },
        /* **************** FLETELTL RECARGO ************************/
        /* fila5(recargo){
             var fsubtotalAux = (parseFloat(this.sefleteltl) * parseFloat(recargo))/100
             this.fsubtotal = (parseFloat(ssubtotalAux) + parseFloat(this.seguro)).toFixed(2)
        }, */
        /* **************** SEGURO ************************/
        fila6(recargo){
             var ssubtotalAux = (parseFloat(this.seguro) * parseFloat(recargo))/100
             this.ssubtotal = (parseFloat(ssubtotalAux) + parseFloat(this.seguro)).toFixed(2)

             
        },
         /* **************** ARANCEL ************************/
        fila7(recargo){
             var ssubtotalAux = (parseFloat(this.seguro) * parseFloat(recargo))/100
             this.ssubtotal = (parseFloat(ssubtotalAux) + parseFloat(this.seguro)).toFixed(2)
        },
        fila8(gaduana, garecargo){
             var gasubtotalAux = (parseFloat(gaduana) * parseFloat(garecargo))/100
             this.gasubtotal = (parseFloat(gasubtotalAux) + parseFloat(this.gaduana)).toFixed(2)
        },
        fila9(hagaduana, hagrecargo){
             var hagsubtotalAux = (parseFloat(hagaduana) * parseFloat(hagrecargo))/100
             this.hagsubtotal = (parseFloat(hagsubtotalAux) + parseFloat(this.hagaduana)).toFixed(2)
        },
        fila10(dscl, sclrecargo){
             var sclsubtotalAux = (parseFloat(dscl) * parseFloat(sclrecargo))/100
             this.sclsubtotal = (parseFloat(sclsubtotalAux) + parseFloat(this.dscl)).toFixed(2)
        },
        fila11(fee, feerecargo){
             var feesubtotalAux = (parseFloat(fee) * parseFloat(feerecargo))/100
             this.feesubtotal = (parseFloat(feesubtotalAux) + parseFloat(this.fee)).toFixed(2)
             /* COSTO TOTAL */
             this.costoTotal = ((parseFloat(this.valorProducto) + parseFloat(this.delivery) 
             + parseFloat(this.warehouse) + parseFloat(this.fleteltl) + parseFloat(this.seguro) 
             + parseFloat(this.arancel) + parseFloat(this.iva) + parseFloat(this.gaduana) 
             + parseFloat(this.hagaduana) + parseFloat(this.dscl) + parseFloat(this.fee))).toFixed(2)
            /* SUB-TOTALES */
             this.costoSubtotal = (parseFloat(this.subtotal1) + parseFloat(this.subDelivery) 
             + parseFloat(this.wsubtotal) + parseFloat(this.fsubtotal) + parseFloat(this.ssubtotal) 
             + parseFloat(this.asubtotal) + parseFloat(this.isubtotal) + parseFloat(this.gasubtotal) 
             + parseFloat(this.hagsubtotal) + parseFloat(this.sclsubtotal) + parseFloat(this.feesubtotal)).toFixed(2)
             console.log(this.costoSubtotal)

             
        },

    },
   
    
}
</script>

<style>
 .text-on-pannel {
  background: #fff none repeat scroll 0 0;
  height: auto;
  margin-left: 15px;
  padding: 3px 5px;
  position: absolute;
  margin-top: -57px;
  border: 1px solid #337ab7;
  border-radius: 8px;
}

.panel {
  /* for text on pannel */
  margin-top: 27px !important;
}

.panel-body {
  padding-top: 30px !important;
  align-items: initial;
}

</style>