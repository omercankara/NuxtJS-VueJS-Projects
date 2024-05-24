<template>
 <div class="container-fluid Product-container px-5 ">
        <div class="row product-row px-5">
                <div class="col-md-12 product-content px-5">
                        <div class="row  product-sub-content px-5 ">
                                <div class="col-md-12 d-flex flex-column product-sub-main  px-5">
                                        
                                        

                                 <div class="row  mt-3 banner-content">
                                                <div class="col-12 col-md-4  col-lg-4  p-1 d-flex justify-content-center align-items-center ">
                                                        <img src="../img/banner.jpeg" class="img-fluid w-100 p-0" >
                                                </div>
                                                <div class="col-12 col-md-4  col-lg-4 p-1 d-flex justify-content-center align-items-center ">
                                                        <img  src="../img/banner2.jpeg" class="img-fluid w-100 p-0 " >
                                                </div>
                                                <div class="col-12 col-md-4 col-lg-4 p-1 d-flex justify-content-center align-items-center">
                                                        <img src="../img/banner3.jpeg" class="img-fluid w-100  p-0" >
                                                </div>
                                        </div>
                                
                                      <div class="row mt-4 " style="background-color:white !important; border-radius:20px !important;">
                                                  <div class="col-4 col-md-2   mt-5 d-flex flex-column justify-content-center   align-items-center  position-relative" v-for="(product,index) in getFavori" :key="index">
                                                         <img :src="product.img" class=" w-75    img-fluid ">
                                                        <i class='bx bx-plus bx-flashing plusicons' ></i>
                                                         <p class="price">{{product.price}}</p>
                                                        <p class="title">{{product.title}}</p>
                                                        <p class="property">{{product.property}}</p>
                                                </div>
                                      </div>

                                      <div class="row mt-4" style="overflow:hidden !important;">
                                                <div style="border-radius:20px !important;" class="col-md-12 banner d-flex justify-content-start align-items-end p-0">

                                                        <div class="col-md-6 d-flex flex-column big-banner px-5 py-3 p-0">
                                                                     <div class="col-12 col-md-8 d-flex flex-column banner-Text px-5 py-3">
                                                                                 <h2 style="font-weight:Bold" class="text-white">Getir'i İndirin</h2>
                                                                                  <p   style="font-weight:Bold; letter-spacing:2px;" class="text-white">İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
                                                                     </div>  

                                                                     <div class="col-md-12    appMarketBanner d-flex justify-content-around px-5 py-3 ">
                                                                                <img src="../img/appgalary.svg">
                                                                                  <img src="../img/appstore.svg">
                                                                                   <img src="../img/googleplay.svg">
                                                                     </div>     
                                                        </div>


                                                        <div class="col-6 col-md-6 phoneBanner   d-flex justify-content-end align-items-end" style="max-width:100% !important; overflow:hidden !important;" >
                                                                <img src="../img/phone.png" class="img-fluid">
                                                        </div>
                                                </div>
                                      </div>


                                      <div class="row mt-4">
                                                <div class="col-md-12 d-flex text-panel mt-2">
                                                       
                                                                  <div class="col-12  text-selector  col-md-4 py-3 p-2 d-flex      ">
                                                                                <div class="col-12 col-md-12 px-5   bg-light">
                                                                                                
                                                                               <div class="col-12 text-image  col-md-12 d-flex justify-content-center align-items-center px-5 py-3">
                                                                                         <img class="img-fluid responsiveİmg mt-4 "  src="../img/ytk.svg">
                                                                               </div>

                                                                                 <div class="col-12  col-md-12   p-0  ">
                                                                                                <h4 class="text-center middleText">Her siparişinize bir kampanya</h4>
                                                                               </div>

                                                                                  <div class="col-12  col-md-12   p-0  ">
                                                                                                <p class="text-center middleContent">Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz</p>
                                                                               </div>
                                                                                </div>
                                                                </div>  

                                                            <div class="col-12  text-selector  col-md-4 py-3 p-2 d-flex      ">
                                                                                <div class="col-12 col-md-12 px-5   bg-light">
                                                                                                
                                                                               <div class="col-md-12 text-image d-flex justify-content-center align-items-center px-5 py-3">
                                                                                         <img class="img-fluid responsiveİmg mt-4 "  src="../img/minute.svg">
                                                                               </div>

                                                                                 <div class="col-md-12   p-0  ">
                                                                                                <h4 class="text-center middleText">Dakikalar içinde kapınızda</h4>
                                                                               </div>

                                                                                  <div class="col-md-12   p-0  ">
                                                                                                <p class="text-center middleContent ">Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz</p>
                                                                               </div>
                                                                                </div>
                                                                </div>

                                                                        <div class="col-12  text-selector  col-md-4 py-3 p-2 d-flex      ">
                                                                               <div class="col-12 col-md-12 px-5   bg-light">
                                                                                                
                                                                               <div class="col-md-12 d-flex justify-content-center text-image align-items-center px-5 py-3">
                                                                                         <img class="img-fluid responsiveİmg mt-4 "  src="../img/market.svg">
                                                                               </div>

                                                                                 <div class="col-md-12   p-0  ">
                                                                                                <h4 class="text-center middleText">Binlerce çeşit mutluluk</h4>
                                                                               </div>

                                                                                  <div class="col-md-12   p-0  ">
                                                                                                <p class="text-center middleContent">Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz</p>
                                                                               </div>
                                                                                </div>
                                                                </div>                                      
                                                        
                                                </div>
                                      </div>     
                                </div>
                          </div>
                     </div>
                </div>
        </div>

        <div class="container-fluid">
                <div class="row bg-light mt-5">
                        <div class="col-md-12 d-flex footer-container     justify-content-around ">
                                
                                <div class="col-md-3    d-flex flex-column align-items-center     justify-content-between">
                                         <h3 class="footerTitle">Getir'i İndirin</h3>
                                         <img class="img-fluid mt-2 " src="../img/appgalary.svg">
                                          <img class="img-fluid mt-2 " src="../img/appstore.svg">
                                         <img class="img-fluid mt-2 " src="../img/googleplay.svg">
                                </div>


                                    <div class="col-md-2  discover-content   d-flex flex-column  align-items-end  justify-content-end ">
                                                <div class="col-md-12 ">
                                                                 <h4 class="text-left footerTitle">Getir'i Keşfedin</h4>
                                                                <p class="text-right">Hakkımızda</p>
                                                                <p class="text-right">Kariyer</p>
                                                                <p class="text-right">Teknoloji Kariyerleri</p>
                                                                <p class="text-right">İletişim</p>
                                                                <p class="text-right">COVID-19 Duyuru</p>
                                                                <p class="text-right">Sosyal Sorumluluk Projeleri</p>
                                                </div>
                                </div>  

                               <div class="col-md-2      d-flex flex-column  align-items-center ">
                                                <div class="col-md-12">
                                                                 <h4 class="text-left footerTitle" >Yardıma mı ihtiyacınız var ?</h4>
                                                                <p class="text-right">Sıkça Sorulan Sorular</p>
                                                                <p class="text-right">Kişisel Verilerin Korunması</p>
                                                                <p class="text-right">Gizlilik Politikası</p>
                                                                <p class="text-right">Kullanım Koşulları</p>
                                                                <p class="text-right">COVID-19 Duyuru</p>
                                                                <p class="text-right">Çerez Politikası</p>
                                                </div>
                                </div>
                                          <div class="col-md-2      d-flex flex-column  align-items-center ">
                                                <div class="col-md-12">
                                                            <h4 class="footerTitle">İş ortağımız Olun</h4>
                                                            <p>Bayimiz Olun</p>
                                                            <p>Deponuzu Kiralayın</p>
                                                            <p>GetirYemek Restoranı Olun</p>
                                                            <p>GetirÇarşı İşletmesi Olun</p>
                                                </div>
                                </div>
                        </div>
                </div>
        </div>


</template>


<script>
import {mapGetters} from  "vuex"
export default {
         computed:{
               ...mapGetters(['getData','getFavori'])
        },


        
    
}
</script>

<style src="./middle.css" scoped>



</style>