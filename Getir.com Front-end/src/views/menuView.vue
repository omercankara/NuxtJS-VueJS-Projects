<template>
        <div class="container-fluid" style="z-index:999 !important;">
                <div class="row">
                        <div class="nav col-md-12   d-flex justify-content-center align-items-center  p-0">
                                <div class="col-12 col-md-6 mobileMain d-flex justify-content-center    ">
                                        <ul class="px-5  mt-2 menu"> 
                                                <li class="active" style="color:orange;">getir</li>
                                                <li @click="this.$router.push({name:'slider'})">getiryemek</li>
                                                <li>getirbüyük</li>
                                                <li>getirsu</li>
                                                <li>getirçarşı</li>
                                        </ul>
                                </div>
                                <div class="col-md-6 loginMain d-flex justify-content-center mt-2 p-0">
                                         <ul class="px-5 "> 
                                                <li>Türkçe</li>
                                                <li>Giriş Yap</li>
                                                <li>Kayıt Ol</li>
                                        </ul>
                                </div>
                        </div>
                </div>
        </div>
</template>

<style scoped>
ul li {
        list-style-type: none;
        display: inline-flex;
        justify-content: center !important;
        align-items: center !important;
        margin-right: 3vh;
        font-size: 2.1vh;
        color: #DCDCFF;
        font-family:poppins;
        font-weight: bold;
}
.nav{
        background-color:rgb(94, 24, 185) !important;
}


@media only screen and  (min-width:600px) and (max-width: 902px) {
.nav{
        background-color:rgb(94, 24, 185) !important;
}
.loginMain {
        display: none !important ;
}
.menu{
        padding: 0px 0px 0px 0px !important;
}
ul{
        padding:  0px 0px 0px 0px !important;
}
ul li {
        list-style-type: none;
        display: inline;
        font-size:3.5vh !important;
        color: #DCDCFF;
        font-weight: bold;
}


}

@media screen and (min-width:355px) and (max-width:500px) { /*500 Den büyük 896 den küçük // 500 896 arası cihazlar*/
.loginMain{
        display:  none !important;
    
}
.mobileMain{
        display: flex !important;
        flex-direction: row !important;
        justify-content: start !important;
        padding: 0vh !important;
        background-color:rgb(94, 24, 185) !important;
}

ul li {
        list-style-type: none;
        display: inline;
        font-size:1.6vh !important;
        color: #DCDCFF;
        font-weight: bold;
}
.menu{
        padding: 0px 0px 0px 0px !important;
}



}

</style>