<template>
  <div id="loader">
    <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
.spinner-grow
    margin-top: 10%
    margin-right:10px
</style>