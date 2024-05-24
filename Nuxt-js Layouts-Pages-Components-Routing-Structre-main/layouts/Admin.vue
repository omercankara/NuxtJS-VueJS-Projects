<template>
    <div>
      <Header/>
  
      <nuxt/> <!--BÜTÜN PAGELERİ GETİR -->
    </div>
  </template>
  
  
  <script>
  
  import Header from '../components/common/header.vue';
  export default {
      components: {Header }
  }
  </script>
  
  