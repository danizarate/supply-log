<template>
  <Menu />
  <BarraIndicadores  @valorDolar = "USD_valor=$event" />
  
  <div class="container">
      <div class="row mt-5">
          <div class="col">
              <h1>Cotizador Supply Log </h1>
               
             <!-- <h5>Valor dolar recargado:  {{ USD_valor }}</h5>
             <h6>{{ usuarioLogueado.user.providerData[0].uid  }} </h6> -->
          </div>
      </div>
      <div class="row mt-5">
            <div class="col-sm-12">
                <form @submit.prevent="procesarID" id="formulario"> <!-- @submit.prevent="procesarID" -->
                    <!-- **************************************************************************************
                    ******************************  IDENTIFICACION DEL USUARIO ******************************** -->
                    <div class="panel panel-primary border p-2 mt-3">
                        <div class="panel-body">
                            <h4 class="text-on-pannel text-primary"><strong class="text-uppercase"> Información de la Cotización </strong></h4>
                            <div class="table-responsive">
                                <table class="table-responsive table-sm">
                                    <tr>
                                        <th>Autor</th>
                                        <th>Fecha</th>
                                        <th>ID Cotización</th>
                                        <th>Valor USD aplicado</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="form-control" id="autor" v-model="Cotizacion.autor" readonly></td>
                                        <td><input type="text" class="form-control" id="fecha" v-model="Cotizacion.fecha" readonly></td>
                                        <td><input type="text" class="form-control" id="cotizacionid"  v-model="Cotizacion.cotizacionID" readonly></td>
                                        <td><input type="number" class="form-control" id="dolaraplicado" step="0.01" v-model.number="Cotizacion.dolarRecargado" readonly></td>
                                    </tr>
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                  <!-- **************************************************************************************
                    ******************************  IDENTIFICACION DEL CLIENTE ******************************** -->
                    <div class="panel panel-primary border p-2 mt-3">
                        <div class="panel-body">
                            <h4 class="text-on-pannel text-primary"><strong class="text-uppercase"> Identificación del Cliente </strong></h4>
                            <div class="table-responsive">
                                <table class="table-responsive table-sm">
                                    <tr>
                                        <th>Razon Social o Nombre</th>
                                        <th>R.U.T.</th>
                                        <th>e-Mail</th>
                                        <th>Telefono</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="form-control" id="razonsocial" v-model="Cotizacion.razonSocial" v-on:keyup.enter="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)" @click="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)"></td>
                                        <td><input type="text" class="form-control" id="rut" v-model="Cotizacion.rut" v-on:keyup.enter="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)" @click="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)"></td>
                                        <td><input type="email" class="form-control" id="e-mail" v-model="Cotizacion.email" v-on:keyup.enter="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)" @click="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)"></td>
                                        <td><input type="text" class="form-control" id="telefono" v-model="Cotizacion.Telefono"  v-on:keyup.enter="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)" @click="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)"></td>
                                    </tr>
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- **************************************************************************************
                    ******************************  PRODUCTO ******************************** -->
                  
                  <div class="panel panel-primary border p-2 mt-3">
                    <div class="panel-body">
                    <h4 class="text-on-pannel text-primary"><strong class="text-uppercase"> Descripción del Producto </strong></h4>
                    <div class="table-responsive">
                        <table class="table-responsive table-sm">
                            <tr>
                                <th>Producto</th>
                                <th>Valor Producto </th>
                                <th>Cantidad</th>
                                <th>% Recargo</th>
                                <th>Sub-Total</th>
                            </tr>
                            <tr>
                                <td><input type="text" class="form-control" id="producto" v-model="Cotizacion.descripcionProducto"></td>
                                <td><input type="number" class="form-control" id="valor" step="0.01" v-model.number="Cotizacion.valorProducto" v-on:keyup.enter="fila1(Cotizacion.valorProducto,Cotizacion.cantidad, Cotizacion.recargo)" @click="fila1(Cotizacion.valorProducto,Cotizacion.cantidad, Cotizacion.recargo)"></td>
                                <td><input type="number" class="form-control" id="cantidadID" step="0.01" v-model.number="Cotizacion.cantidad" v-on:keyup.enter="fila1(Cotizacion.valorProducto,Cotizacion.cantidad, Cotizacion.recargo)" @click="fila1(Cotizacion.valorProducto, Cotizacion.cantidad, Cotizacion.recargo)"></td>
                                <td><input type="number" class="form-control" id="recargo" step="0.01" placeholder="20" v-model.number="Cotizacion.recargo" v-on:keyup.enter="fila1(Cotizacion.valorProducto,Cotizacion.cantidad, Cotizacion.recargo)" v-on:keyup.tab="fila1(Cotizacion.valorProducto,Cotizacion.cantidad, Cotizacion.recargo)" @click="fila1(Cotizacion.valorProducto, Cotizacion.recargo)"></td>
                                <td><input type="number" class="form-control" id="subtotal1" step="0.01" v-model.number="Cotizacion.subtotal1" readonly></td>
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
                                    <td><input type="number" class="form-control" id="pesoxKilo" step="0.01" v-model.number="Cotizacion.pesoxKilo" v-on:keyup.enter="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)" @click="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)"></td>
                                    <td><input type="number" class="form-control" id="largo" step="0.01" v-model.number="Cotizacion.largo" v-on:keyup.enter="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)" @click="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)"></td>
                                    <td><input type="number" class="form-control" id="ancho" step="0.01" v-model.number="Cotizacion.ancho" v-on:keyup.enter="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)" @click="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)"></td>
                                    <td><input type="number" class="form-control" id="alto" step="0.01" v-model.number="Cotizacion.alto"  v-on:keyup.enter="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)" @click="fila2(Cotizacion.pesoxKilo, Cotizacion.largo, Cotizacion.ancho, Cotizacion.alto)"></td>
                                    <td><input type="number" class="form-control" id="kiloVol" step="0.01" v-model.number="Cotizacion.kiloVol" readonly></td>
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
                                    <input type="text" class="form-control" id="kilosAduana"  placeholder="0" v-model.number="Cotizacion.kilosAduana" readonly>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="honorariosA" class="col-sm-2 col-form-label">Honorarios Agente Aduana</label>
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" id="honorariosA"  placeholder="0" v-model.number="Cotizacion.honorarios" readonly>
                                </div>
                            </div>



                            <table class="table-responsive table-sm" >
                                <tr>
                                    <th>Delivery Origen USA</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total Delivery</th>
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="delivery" step="0.01" v-model.number="Cotizacion.delivery" v-on:keyup.enter="fila3(Cotizacion.drecargo)" @click="fila3(Cotizacion.drecargo)"></td>
                                    <td><input type="number" class="form-control" id="warehouse" step="0.01" v-model.number="Cotizacion.drecargo"  v-on:keyup.enter="fila3(Cotizacion.drecargo)" @click="fila3(Cotizacion.drecargo)"></td>
                                    <td><input type="number" class="form-control" id="subDeliveryID" step="0.01" v-model.number="Cotizacion.subDelivery" readonly></td>
                                </tr>
                                
                            </table>

                            <table class="table-responsive table-sm mt-2">
                                <tr>
                                    <th>Warehouse Mia</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total Warehouse</th>
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="warehouse" step="0.01" v-model.number="Cotizacion.warehouse" v-on:keyup.enter="fila4(Cotizacion.wrecargo)" @click="fila4(Cotizacion.wrecargo)"></td>
                                    <td><input type="number" class="form-control" id="wrecargo" step="0.01" v-model.number="Cotizacion.wrecargo"  v-on:keyup.enter="fila4(Cotizacion.wrecargo)" @click="fila4(Cotizacion.wrecargo)"></td>
                                    <td><input type="number" class="form-control" id="wsubtotal" step="0.01" v-model.number="Cotizacion.wsubtotal" disabled='true' readonly></td>
                                </tr>

                                
                            </table>
                            <table class="table-responsive table-sm mt-2">
                                <tr>
                                    <th>Flete ltl</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total Flete</th>
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="fleteltl" step="0.01" v-model.number="Cotizacion.fleteltl" readonly></td>
                                    <td><input type="number" class="form-control" id="frecargo" step="0.01" v-model.number="Cotizacion.frecargo"  v-on:keyup.enter="fila5(Cotizacion.frecargo)" @click="fila5(Cotizacion.frecargo)"></td>
                                    <td><input type="number" class="form-control" id="fsubtotal" step="0.01" v-model.number="Cotizacion.fsubtotal" disabled='true' readonly></td>
                                </tr>
                            </table>   
                            <table class="table-responsive table-sm mt-2">
                                <tr>
                                    <th>Seguro</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total Seguro</th>
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="seguroID" step="0.01" v-model.number="Cotizacion.seguro" readonly></td>
                                    <td><input type="number" class="form-control" id="srecargoID" step="0.01" v-model.number="Cotizacion.srecargo"  v-on:keyup.enter="fila6(Cotizacion.srecargo)" @click="fila6(Cotizacion.srecargo)"></td>
                                    <td><input type="number" class="form-control" id="ssubtotalID" step="0.01" v-model.number="Cotizacion.ssubtotal" readonly></td>
                                </tr>
                            </table>   
                            <table class="table-responsive table-sm mt-2">
                                <tr>
                                    <th>Arancel 6% s/cif</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total Arancel</th>
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="arancel" step="0.01" v-model.number="Cotizacion.arancel" readonly></td>
                                    <td><input type="number" class="form-control" id="arecargo" step="0.01" v-model.number="Cotizacion.arecargo"  v-on:keyup.enter="fila7(Cotizacion.srecargo)" @click="fila7(Cotizacion.srecargo)"></td>
                                    <td><input type="number" class="form-control" id="asubtotal" step="0.01" v-model.number="Cotizacion.asubtotal" disabled='true' readonly></td>
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
                                    <td><input type="number" class="form-control" id="iva" step="0.01" v-model.number="Cotizacion.iva" readonly></td>
                                    <td><input type="number" class="form-control" id="irecargo" step="0.01" v-model.number="Cotizacion.irecargo" readonly></td>
                                    <td><input type="number" class="form-control" id="isubtotal" step="0.01" v-model.number="Cotizacion.isubtotal" disabled='true' readonly></td>
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
                                    <td><input type="number" class="form-control" id="gaduanaID" step="0.01" v-model.number="Cotizacion.gaduana" v-on:keyup.enter="fila8()" @click="fila8()"></td> 
                                    <td><input type="number" class="form-control" id="garecargoID" step="0.01" v-model.number="Cotizacion.garecargo" v-on:keyup.enter="fila8()" @click="fila8()"></td>
                                    <td><input type="number" class="form-control" id="gasubtotalID" step="0.01" v-model.number="Cotizacion.gasubtotal" readonly></td>
                                    
                                </tr>
                                
                            </table>
                            <table class="table-responsive table-sm p-2">
                                <tr>
                                    <th>Honorarios Agente Aduana</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total</th>
                                   
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="hagaduana" step="0.01" v-model.number="Cotizacion.hagaduana" v-on:keyup.enter="fila9(Cotizacion.hagaduana, Cotizacion.hagrecargo)" @click="fila9(Cotizacion.hagaduana, Cotizacion.hagrecargo)"></td>
                                    <td><input type="number" class="form-control" id="hagrecargo" step="0.01" v-model.number="Cotizacion.hagrecargo" v-on:keyup.enter="fila9(Cotizacion.hagaduana, Cotizacion.hagrecargo)" @click="fila9(Cotizacion.hagaduana, Cotizacion.hagrecargo)"></td>
                                    <td><input type="number" class="form-control" id="hagsubtotal" step="0.01" v-model.number="Cotizacion.hagsubtotal" readonly></td>
                                    
                                </tr>
                                
                            </table>
                            <table class="table-responsive table-sm p-2">
                                <tr>
                                    <th>Delivery SCL</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total</th>
                                   
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="dscl" step="0.01" v-model.number="Cotizacion.dscl" v-on:keyup.enter="fila10(Cotizacion.dscl, Cotizacion.sclrecargo)" @click="fila10(Cotizacion.dscl, Cotizacion.sclrecargo)"></td>
                                    <td><input type="number" class="form-control" id="sclrecargo" step="0.01" v-model.number="Cotizacion.sclrecargo" v-on:keyup.enter="fila10(Cotizacion.dscl, Cotizacion.sclrecargo)" @click="fila10(Cotizacion.dscl, Cotizacion.sclrecargo)"></td>
                                    <td><input type="number" class="form-control" id="sclsubtotal" step="0.01" v-model.number="Cotizacion.sclsubtotal" readonly></td>
                                    
                                </tr>
                            </table>
                            <table class="table-responsive table-sm p-2">
                                <tr>
                                    <th>Fee Aeropuerto</th>
                                    <th>% Recargo</th>
                                    <th>Sub-Total</th>
                                   
                                </tr>
                                <tr>
                                    <td><input type="number" class="form-control" id="feeID" step="0.01" v-model.number="Cotizacion.fee" v-on:keyup.enter="fila11(Cotizacion.fee, Cotizacion.feerecargo)" @click="fila11(Cotizacion.fee, Cotizacion.feerecargo)"></td>
                                    <td><input type="number" class="form-control" id="feerecargoID" step="0.01" v-model.number="Cotizacion.feerecargo" v-on:keyup.enter="fila11(Cotizacion.fee, Cotizacion.feerecargo)" @click="fila11(Cotizacion.fee, Cotizacion.feerecargo)"></td>
                                    <td><input type="number" class="form-control" id="feesubtotalID" step="0.01" v-model.number="Cotizacion.feesubtotal" readonly></td>
                                    
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
                                    <td><input type="number" class="form-control" id="costoTotal" step="0.01" v-model.number="Cotizacion.costoTotal" readonly></td>
                                    <td><input type="number" class="form-control" id="costoT" step="0.01" v-model.number="Cotizacion.costoT"  readonly></td>
                                    <td><input type="number" class="form-control" id="costoSubtotal" step="0.01" v-model.number="Cotizacion.costoSubtotal" readonly></td>
                                    
                                </tr>
                            </table>
                            <div v-if="!Cotizacion.modificado" class="float-left ml-2 mb-3">
                                    <button type="button" id="ProcesarForm" class="btn btn-primary btn-sm" @click="procesarID">
                                        <i class="fas fa-plus-circle"> Añadir al listado</i>
                                    </button>    
                                    <!-- <button type="reset" class="btn btn-danger btn-sm">
                                                <i class="fas fa-trash-alt"></i>
                                    </button> -->
                            </div>
                            <div v-else class="float-left ml-2 mb-3">
                                <button type="button" id="guardar" class="btn btn-success btn-sm" @click="guardar()">
                                    Guardar Cambios                    
                                </button>
                            </div>
                            
                            <!-- {{Productos}} -->
                            <!-- <ListadoProductos /> -->
                             <table class="table thead-dark table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">#Id</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Alto</th>
                                    <th scope="col">Ancho</th>
                                    <th scope="col">Largo</th>
                                    <th scope="col">Peso Volumetrico</th>
                                    <th scope="col">Valor Unitario</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Total USD</th>
                                    <th scope="col">Total Costos</th>
                                    <th scope="col">Total Venta</th>
                                    <th scope="col">V.Unitario USD</th>
                                    <th scope="col">V.Unitario CLP</th>
                                    <th scope="col">Total CLP</th>
                                    <th scope="col">Accion</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="producto in Productos" :key="producto.id">
                                    <th scope="row">{{producto.id}}</th>
                                    <td>{{producto.descripcionProducto}}</td>
                                    <td>{{producto.alto}}</td>
                                    <td>{{producto.ancho}}</td>
                                    <td>{{producto.largo}}</td>
                                    <td>{{producto.kiloVol}}</td>
                                    <td>{{producto.valorProducto * producto.cantidad}}</td>
                                    <td>{{producto.cantidad}}</td>
                                    <td>{{producto.subtotal1}}</td>
                                    <td>{{producto.costoTotal}}</td>
                                    <td>{{producto.costoSubtotal}}</td>
                                    <td>{{(producto.costoSubtotal / producto.cantidad).toFixed(2)}}</td>
                                    <td>{{((producto.costoSubtotal / producto.cantidad) * producto.dolarRecargado).toFixed(2)}}</td>
                                    <td>{{ Math.round (((producto.costoSubtotal / producto.cantidad) * producto.dolarRecargado) * producto.cantidad)}}</td>
                                    <td>
                                        <div class="d-flex">
                                            <button type="button" class="btn btn-danger btn-sm" @click="eliminar(producto.id)">
                                                <i class="fas fa-trash-alt"></i>
                                            </button>
                                            
                                            <button type="button" class="btn btn-warning btn-sm ml-1" @click="edicion(producto.id)">
                                               <i class="fas fa-pencil-alt"></i>
                                            </button>
                                            
                                        
                                        </div>
                                        
                                            
                                    </td>
                                    <!-- <span class="dashicons dashicons-trash"></span> -->
                                    </tr>
                                    
                                </tbody>
                                </table>
                        </div>
                        
                    </div>
                    
                     </div>
                    <!-- **************************************************************************************  -->
                </div>
                  
                </form>
            </div>
             
      </div>
  </div>
</template>

<script>

/* import ListadoProductos from '@/components/ListadoProductos' */
import { mapState, mapActions } from 'vuex'

import { nanoid } from 'nanoid'

import firebase from 'firebase'
import Menu from '@/components/Menu.vue'
import BarraIndicadores from '@/components/BarraIndicadores.vue'

export default {
    name: "Cotizador",
    components: {
        Menu,
        BarraIndicadores,
        
        /* ListadoProductos, */
       
    },
    data(){
        return{
            USD_valor: '',
            miArray:[],
            f11:0,
            f2:0,
            Cotizacion: {
                autor:'',
                fecha:'',
                rut:'',
                razonSocial:'',
                email:'',
                telefono:'',
                cotizacionID:'',
                descripcionProducto:'',
                id:'',
                modificado:false,
                valorProducto: 0,
                cantidad:0,
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
                frecargo:0,
                fsubtotal:0,

                warehouse:0,
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
                costoSubtotal:0,
                dolarRecargado:0,
            },
            
            
        }
    },
    methods:{
        ...mapActions(['SetProducto']),
        ...mapActions(['eliminar']),
        ...mapActions(['editar']),
        ...mapActions(['actualizar']),
        
        procesarID(){

                this.Cotizacion.id = nanoid(10);
                var copia = Object.assign({}, this.Cotizacion);

                console.log('Procesando ID :'+ this.Cotizacion.id)

                this.SetProducto(copia)
                
                console.log('Procesado!!!')
                // Limpiar aqui el formulario
                /* this.reset() */
               
                document.getElementById("formulario").reset();
        },
        edicion(id){
            try {
              this.editar(id) 
              this.Cotizacion = this.$store.state.Cotizacion
              this.Cotizacion.modificado = true;
            } catch (error) {
                console.log(error)
            }  
        },
        async guardar(){
            try {
                // EL BOTON GUARDAR CAMBIOS LLAMA A ESTA FUNCION
                 var copia = Object.assign({}, this.Cotizacion);
                 console.log('Antes de la tienda - COPIA')
                 console.log(copia)
                 
                await this.actualizar(copia)
                /* this.Cotizacion = this.$store.state.Cotizacion */
                /* console.log(this.$store.state.Productos)  */
                /* this.$store.state.Productos  = copia */
                
                //Limpiar aqui el form
                this.resetear();
            } catch (error) {
                console.log(error)
            }
           /*  this.$store.state.Cotizacion = this.Cotizacion */
            
        },
         resetear(){
                this.autor=''
                this.fecha=''
                this.rut=''
                this.razonSocial=''
                this.email=''
                this.telefono=''
                this.cotizacionID='',
                this.Cotizacion.descripcionProducto=''
                this.Cotizacion.id=''
                this.Cotizacion.modificado=false
                this.Cotizacion.valorProducto= 0
                this.Cotizacion.cantidad=0
                this.Cotizacion.recargo=0
                this.Cotizacion.subtotal1=0

                this.Cotizacion.pesoxKilo=0
                this.Cotizacion.largo=0
                this.Cotizacion.ancho=0
                this.Cotizacion.alto=0
                this.Cotizacion.kiloVol=0

                this.Cotizacion.aduanaKG=0
                this.Cotizacion.honorarios= 0
                this.Cotizacion.delivery= 0
                this.Cotizacion.drecargo= 0
                this.Cotizacion.kilosAduana=0
                this.Cotizacion.subDelivery=0

                this.Cotizacion.fleteltl=0
                this.Cotizacion.frecargo=0
                this.Cotizacion.fsubtotal=0

                this.Cotizacion.warehouse=0
                this.Cotizacion.wrecargo=0
                this.Cotizacion.wsubtotal=0

                this.Cotizacion.seguro=0
                this.Cotizacion.srecargo=0
                this.Cotizacion.ssubtotal=0

                this.Cotizacion.arancel=0
                this.Cotizacion.arecargo=0
                this.Cotizacion.asubtotal=0

                this.Cotizacion.iva=0
                this.Cotizacion.irecargo=0
                this.Cotizacion.isubtotal=0

                this.Cotizacion.gaduana=0
                this.Cotizacion.garecargo=0
                this.Cotizacion.gasubtotal=0

                this.Cotizacion.hagaduana=0
                this.Cotizacion.hagrecargo=0
                this.Cotizacion.hagsubtotal=0

                this.Cotizacion.dscl=0
                this.Cotizacion.sclrecargo=0
                this.Cotizacion.sclsubtotal=0

                this.Cotizacion.fee=0
                this.Cotizacion.feerecargo=0
                this.Cotizacion.feesubtotal=0

                this.Cotizacion.costoTotal=0
                this.Cotizacion.costoT=0
                this.Cotizacion.costoSubtotal=0
                this.Cotizacion.dolarRecargado=0
        },
      
       
            
        
        fila1(valor, cantidad, recargo){
            /* this.dolar() */
            this.Cotizacion.subtotal1 = (((valor * recargo)/100) + parseFloat(valor)) * cantidad
            /* this.Cotizacion.dolarRecargado = (parseFloat(this.USD_valor.replace(/,/g, '.')).toFixed(2) * 1.1).toFixed(2) */
           
        },
        fila2(pesoxKilo, largo, ancho, alto){
            this.Cotizacion.kiloVol = parseFloat((largo * ancho * alto ) * 167)
            /* this.Cotizacion.kiloVol = f2 */
            /* Calculo del kilosAduana */
            if(pesoxKilo > this.Cotizacion.kiloVol){
                this.Cotizacion.kilosAduana = pesoxKilo
                this.Cotizacion.fsubtotal = pesoxKilo * 8
            }else{
                this.Cotizacion.kilosAduana = this.Cotizacion.kiloVol
                this.Cotizacion.fsubtotal = this.Cotizacion.kiloVol * 8
            }
            /* ***************** HONORARIOS ******************************** */
            
            this.Cotizacion.honorarios = this.Cotizacion.valorProducto * 0.005
            /* **************** Actualiza Flete ltl ************************/
            
            this.Cotizacion.fleteltl = this.Cotizacion.kilosAduana * 2.5
            
            /* ****************  SEGURO y SUBTOTALES ************************/
            var seguroAux = parseFloat(parseFloat(this.Cotizacion.valorProducto) + parseFloat(this.Cotizacion.fleteltl)) * 1.1
            this.Cotizacion.seguro = parseFloat(((seguroAux * 0.15)/100).toFixed(2))
            var arancelAux = parseFloat(parseFloat(this.Cotizacion.valorProducto) + parseFloat(this.Cotizacion.fleteltl)) * 1.1
            this.Cotizacion.ssubtotal = parseFloat(((arancelAux * 0.5)/100).toFixed(2))
            this.Cotizacion.arancel = parseFloat(((parseFloat(this.Cotizacion.valorProducto) + parseFloat(this.Cotizacion.fleteltl) + parseFloat(this.Cotizacion.seguro)) * 0.06).toFixed(2))
            this.Cotizacion.asubtotal =  parseFloat(((parseFloat(this.Cotizacion.subtotal1) + parseFloat(this.Cotizacion.fsubtotal) + parseFloat(this.Cotizacion.ssubtotal)) * 0.06).toFixed(2))
            this.Cotizacion.iva = parseFloat(((parseFloat(this.Cotizacion.valorProducto) + parseFloat(this.Cotizacion.fleteltl) + parseFloat(this.Cotizacion.seguro) + parseFloat(this.Cotizacion.arancel)) * 0.19).toFixed(2))
            this.Cotizacion.isubtotal = parseFloat(((parseFloat(this.Cotizacion.subtotal1) + parseFloat(this.Cotizacion.fsubtotal) + parseFloat(this.Cotizacion.ssubtotal) + parseFloat(this.Cotizacion.asubtotal)) * 0.19).toFixed(2))
            /* console.log(this.arancel) */

        /* **************** DELIVERY ************************/
        },
        fila3(drecargo){
             var dsubtotalAux = Number
             dsubtotalAux = parseFloat((parseFloat(this.Cotizacion.delivery) * parseFloat(drecargo))/100)

             this.Cotizacion.subDelivery = parseFloat((parseFloat(dsubtotalAux) + parseFloat(this.Cotizacion.delivery)).toFixed(2))
        },
        /* **************** WAREHOUSE ************************/
        fila4(wrecargo){
             var wsubtotalAux = parseFloat((parseFloat(this.Cotizacion.warehouse) * parseFloat(wrecargo))/100)
             this.Cotizacion.wsubtotal = parseFloat((parseFloat(wsubtotalAux) + parseFloat(this.Cotizacion.warehouse)).toFixed(2))
            
        },
        /* **************** FLETELTL RECARGO ************************/
        /* fila5(recargo){
             var fsubtotalAux = (parseFloat(this.sefleteltl) * parseFloat(recargo))/100
             this.fsubtotal = (parseFloat(ssubtotalAux) + parseFloat(this.seguro)).toFixed(2)
        }, */
        /* **************** SEGURO ************************/
        fila6(recargo){
             var ssubtotalAux = parseFloat((parseFloat(this.Cotizacion.seguro) * parseFloat(recargo))/100)
             this.Cotizacion.ssubtotal = parseFloat(parseFloat(ssubtotalAux) + parseFloat((this.Cotizacion.seguro).toFixed(2)))

             
        },
         /* **************** ARANCEL ************************/
        fila7(recargo){
             var ssubtotalAux = parseFloat((parseFloat(this.seguro) * parseFloat(recargo))/100)
             this.Cotizacion.ssubtotal = parseFloat((parseFloat(ssubtotalAux) + parseFloat(this.Cotizacion.seguro)).toFixed(2))
        },
        fila8(){
            
            if (this.Cotizacion.garecargo > 0){
                var gasubtotalAux = parseFloat(((parseFloat(this.Cotizacion.gaduana) * parseFloat(this.Cotizacion.garecargo))/100).toFixed(2))
                this.Cotizacion.gasubtotal = parseFloat((parseFloat(gasubtotalAux) + parseFloat(this.Cotizacion.gaduana)).toFixed(2))
            }else{
                this.Cotizacion.gasubtotal = parseFloat(this.Cotizacion.gaduana)
            }
            console.log(this.Cotizacion.gaduana)
            console.log(this.Cotizacion.garecargo)
            console.log('subtotal: ' + this.Cotizacion.gasubtotal)
             
        },
        fila9(hagaduana, hagrecargo){
            console.log(hagaduana)
            console.log(hagrecargo)
             var hagsubtotalAux = parseFloat((parseFloat(hagaduana) * parseFloat(hagrecargo))/100)
             
             
             this.Cotizacion.hagsubtotal = parseFloat((parseFloat(hagsubtotalAux) + parseFloat(this.Cotizacion.hagaduana)).toFixed(2))
             console.log(this.Cotizacion.hagsubtotal)

        },
        fila10(dscl, sclrecargo){
             var sclsubtotalAux = parseFloat((parseFloat(dscl) * parseFloat(sclrecargo))/100)
             this.Cotizacion.sclsubtotal = parseFloat((parseFloat(sclsubtotalAux) + parseFloat(this.Cotizacion.dscl)).toFixed(2))
        },
        fila11(fee, feerecargo){
             var feesubtotalAux = parseFloat((parseFloat(fee) * parseFloat(feerecargo))/100)
             this.Cotizacion.feesubtotal = parseFloat((parseFloat(feesubtotalAux) + parseFloat(this.Cotizacion.fee)).toFixed(2))
             /* COSTO TOTAL */
             this.Cotizacion.costoTotal = parseFloat(((parseFloat(this.Cotizacion.valorProducto) + parseFloat(this.Cotizacion.delivery) 
             + parseFloat(this.Cotizacion.warehouse) + parseFloat(this.Cotizacion.fleteltl) + parseFloat(this.Cotizacion.seguro) 
             + parseFloat(this.Cotizacion.arancel) + parseFloat(this.Cotizacion.iva) + parseFloat(this.Cotizacion.gaduana) 
             + parseFloat(this.Cotizacion.hagaduana) + parseFloat(this.Cotizacion.dscl) + parseFloat(this.Cotizacion.fee))).toFixed(2))
            /* SUB-TOTALES */
             this.Cotizacion.costoSubtotal = Math.round(parseFloat((parseFloat(this.Cotizacion.subtotal1) + parseFloat(this.Cotizacion.subDelivery) 
             + parseFloat(this.Cotizacion.wsubtotal) + parseFloat(this.Cotizacion.fsubtotal) + parseFloat(this.Cotizacion.ssubtotal) 
             + parseFloat(this.Cotizacion.asubtotal) + parseFloat(this.Cotizacion.isubtotal) + parseFloat(this.Cotizacion.gasubtotal) 
             + parseFloat(this.Cotizacion.hagsubtotal) + parseFloat(this.Cotizacion.sclsubtotal) + parseFloat(this.Cotizacion.feesubtotal)).toFixed(2)))
             console.log(this.Cotizacion.costoSubtotal)

             
        },
        dolar(){
            try {
                setTimeout(()=>{
                    this.Cotizacion.dolarRecargado = (parseFloat(this.USD_valor.replace(/,/g, '.')).toFixed(2) * 1.1).toFixed(2)
                }, 1500)    
            } catch (error) {
                console.log(error)
            }    
        },
        fecha(){
            const hoy = new Date();
            this.Cotizacion.fecha = hoy.toLocaleString('es-ES')
            
        },
        IDCotizacion(){
            this.Cotizacion.cotizacionID = nanoid(10);
        },
        autor(){
              try {
                this.Cotizacion.autor = this.usuarioLogueado.user.providerData[0].uid
                firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                        // User is signed in.
                        alert(this.Cotizacion.autor)
                                        
                    }else {
                        // No user is signed in.
                        console.log('no user logued in')
                    }
                })
            } catch (error) {
                console.log(error)
            }    
         
            
        }
       
    }, /* Fin MOUNTED */
    mounted() {
        this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        this.dolar()
        this.fecha()
        this.IDCotizacion()
        this.autor()
        })
    },
    computed:{
        ...mapState(['Productos']),
        ...mapState(['Cotizacion']),
        ...mapState(['usuarioLogueado'])
    },
    watch:{
        /* firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
        } else {
            // No user is signed in.
        }
        }) */
    }
    
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