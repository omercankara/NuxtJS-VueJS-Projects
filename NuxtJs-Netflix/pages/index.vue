<template>
  <div class="item">
    <Header />
    <div style="height: 5px; background-color: gray; border: 1px solid black;"></div>
    <tvBanner />
    <div style="height: 5px; background-color: gray; border: 1px solid black;"></div>
    <MobileBanner />
    <div style="height: 5px; background-color: gray; border: 1px solid black;"></div>
    <Device />
    <div style="height: 5px; background-color: gray; border: 1px solid black;"></div>
    <childBanner />
    <div style="height: 5px; background-color: gray; border: 1px solid black;"></div>
    <choosePage />
    <div style="height: 5px; background-color: gray; border: 1px solid black;"></div>
    <footerBanner />
  </div>
</template>




<script>
import MobileBanner from '../components/HomePageComponents/MobileBanner.vue';
import Header from '../components/HomePageComponents/Header.vue';
import tvBanner from '../components/HomePageComponents/tvBanner.vue';
import Device from '../components/HomePageComponents/device.vue';
import childBanner from "../components/HomePageComponents/childBanner.vue"
import choosePage from "../components/HomePageComponents/choosePage.vue"
import footerBanner from "../components/HomePageComponents/footerBanner.vue"
export default {
  components: {
    Header,
    tvBanner,
    MobileBanner,
    Device,
    childBanner,
    choosePage,
    footerBanner
  }
}
</script>


<style></style>