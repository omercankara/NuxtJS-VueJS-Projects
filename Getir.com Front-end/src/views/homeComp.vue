<template>

<div class="container-fluid">
        <div class="row">
                <div class="col-12 col-md-12 h-25 p-0">
                                                <swiper :spaceBetween="30"  :centeredSlides="true" :loop="false" :autoplay="{
                        delay: 1000,
                         disableOnInteraction: false,
                        }" 
                        :modules="modules" class="mySwiper" style="z-index:1; top:0"
                        >
                <swiper-slide class="h-25  main">
                                 <img class="h-25 img-fluid" src="../img/slider1.jpg">
                </swiper-slide>

               <swiper-slide class="h-25 main">
                        <img class="h-25" src="../img/slider2.jpg">
                </swiper-slide>

                <swiper-slide class="h-25  main">
                        <img class="h-25" src="../img/slider3.jpg">
                </swiper-slide>

                <swiper-slide class="h-25 main">
                        <img class="h-25" src="../img/slider4.jpg">
                </swiper-slide>
    
                </swiper>
        </div>

                <div class="col-md-12 position-content position-absolute" style="z-index:999 !important;">
                        <div class="row  mt-5 mainContent">
                               
                                <div class="col-6 col-md-6 mt-5  timeMain d-flex flex-column align-items-center justify-content-center px-5">
                                                <div class="col-6 col-md-6">
                                                                 <img class="img-fluid  " src="../img/logo.svg" style="max-width:300px !important;">
                                                </div>
                                                <div class="col-md-6 d-flex justify-content-end align-items-end  mt-2 py-5">
                                                         <h1 class="text-white">Dakikalar içinde kapınızda</h1>
                                                </div>
                                </div>
                                
                                <div class="col-12 col-md-12 col-lg-6 d-flex flex-column align-items-center justify-content-center ">
                                                <div class="col-12 col-md-12 col-lg-7 col-xl-5 d-flex flex-column justify-content-center align-items-center bg-light   py-4" style="border-radius:15px !important;">
                                                        <div class="col-12 col-md-12  ">
                                                                <h6 style="color:#5B3DB9;" class="text-center">Giriş yap veya kayıt ol</h6>
                                                        </div>
                                                         <div class="col-8 col-md-8 col-lg-7 p-0 mt-3 ">
                                                                <input type="text" class="form-control " placeholder="Telefon Numarası">
                                                        </div>       
                                                        <div class="col-12 col-md-12   d-flex justify-content-center align-items-center mt-3">
                                                                <button style="color:#5B3DB9;" class="btn btn-warning">Telefon Numarası İle Devam Et</button>
                                                        </div> 
                                                </div>
                                </div>

                        </div>

                </div>

        </div>
</div>

<kategori/>
  <middle/>

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";


//import myMenu from "./menuView.vue"

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay } from "swiper";
import middle from "../components/middleContainer.vue"

import kategori from "../components/categoriesComp.vue"

export default {
  components: {
    Swiper,
    SwiperSlide,
    middle,
    kategori,
   
    //myMenu
  },



 
  setup() {
    return {
      modules: [Autoplay],
    };
  },

  
};
</script>



<style src="./home.css" scoped >

</style>