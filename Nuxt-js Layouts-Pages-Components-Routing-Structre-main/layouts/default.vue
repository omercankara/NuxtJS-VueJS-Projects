<template>
  <div>
    <Header/>
    <Banner/>

    <nuxt/> <!--BÜTÜN PAGELERİ GETİR -->
  </div>
</template>


<script>

import Banner from '../components/common/banner.vue';
import Header from '../components/common/header.vue';
export default {
    components: { Banner, Header }
}
</script>

