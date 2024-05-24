<template>
       <div class="container-fluid" style="background-color:white !important;">
                <div class="row">
                       <div class="col-md-12  py-3  d-flex justify-content-center align-items-center px-5">
                                <div class="col-md-10 px-4"><h6 class="" style="text-align:left !important;">Kampanyalar</h6></div>
                       </div>
                        <div class="col-md-12  justify-content-center align-items-center d-flex flex-column ">
                            
                               <div class="col-md-10 d-flex product-Container flex-wrap  py-4  ">
                                              
                                           <div class="col-3 col-md-2 col-lg-1 productİmg  py-3  d-flex justify-content-center align-items-center    flex-column    position-relative" v-for="(product,index) in getData" :key="index">
                                                 <img :src="product.img" class="img-fluid productİmg   px-3  ">
                                                 <p class="productTitle">{{product.title}}</p>
                                          </div>

                               </div>

                        </div>
                </div>      
       </div>
</template>


<script>
import {mapGetters} from  "vuex"
export default {
        components:{

        },
        computed:{
               ...mapGetters(['getData'])
        }
}
</script>


<style scoped src="./categori.css"></style>