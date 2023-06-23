<template>
  <!-- <Header/> -->
  <!-- install pinia -->

  <RouterView/>
</template>

<script>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'

export default {
  mounted(){
    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
    
    darkModePreference.addEventListener(
      "change", e => document.body.setAttribute('data-bs-theme', e.matches ? 'dark' : 'light') 
    );
  }
}
</script>