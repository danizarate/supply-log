<template>
    <!-- alert("Modulo Whatsapp") -->
    <a class="appWhatsapp" target="_Blanck" href="https://api.whatsapp.com/send?phone=56942696881&text=Hola!%20Quiero%20consultar%20por%20sus%20servicios!">
        <img src="../assets/img/rrss/whatsapp.gif" alt="WhatsApp">
        
    </a>
</template>

<script>
export default {
    name: "Whatsapp",
   
}

</script>

<style>
.appWhatsapp{
    position: fixed;
    right: 24px;
    bottom: 25px;
    width: 80px;
    z-index: 1000;
    
}
.appWhatsapp img{
    width: 100%;
    height: auto;
}
</style>