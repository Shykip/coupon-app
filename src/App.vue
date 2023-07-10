<template>
  <div class="bgDIV flex flex-col font-Nunito">
    <NavBar />
    <ContentPage />
  </div>
</template>

<script setup>
  import NavBar from './components/NavBar.vue'
  import ContentPage from './components/ContentPage.vue'
</script>

<style scoped>
  .bgDIV{
    height: 100vh;
    overflow-x: hidden;
    background-image: url('./assets/images/meshBG.png');
  }

</style>
