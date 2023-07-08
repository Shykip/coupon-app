<template>
  <div class="bgDIV flex flex-col min-h-screen font-Nunito">
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
    background-image: url('./assets/images/meshBG.png');
  }

</style>
