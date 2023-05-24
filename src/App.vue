<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';


</script>

<template>
  <header>
    <div class="container w-full mx-auto mt-2 drop-shadow-xl">
      <nav>
       <MainHeader/>
      </nav>
    </div>
  </header>
 
  <main>
    <RouterView />
  </main>
</template>

<style scoped>


</style>
