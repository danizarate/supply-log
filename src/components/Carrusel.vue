<template>

    <div id="carrusel" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#carrusel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carrusel" data-bs-slide-to="1"></li>
            <li data-bs-target="#carrusel" data-bs-slide-to="2"></li>
        </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/img/carrusel/uno.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-xs-block">
                        <h5>Kids</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/carrusel/dos.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-xs-block">
                        <h5>Women League</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/carrusel/tres.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-xs-block">
                        <h5>Men League</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
            </div>
        <a class="left carousel-control" href="#carrusel" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carrusel" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </a>
    </div>


</template>

<script>
export default {
  
}
</script>

<style>

</style>