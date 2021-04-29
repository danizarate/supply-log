<template>
  
  <table class="table thead-dark table-striped">
  <thead>
    <tr v-for="item in Cotizacion" :key="item.id">
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
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>1</td>
      <td>2</td>
      <td>@3</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>

    </tr>
    
  </tbody>
</table>
</template>

<script>
import {mapState} from 'vuex'
export default {
    ...mapState(['Productos'])
}
</script>

<style>

</style>