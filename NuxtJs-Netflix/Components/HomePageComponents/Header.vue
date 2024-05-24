<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        loginPage(){
            this.$router.push('/login')
        },
        lang(){
this.$router.push('/en')
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="menu">
            <div class="logo">
                <img src="../../static/Logo.png" alt="">
            </div>
            <div class="app-menu">
                <div class="app-button-item">
                    <button @click="lang()" class="language menubutton">Türkçe</button>
                    <button @click="loginPage()" class="danger menubutton">Oturum Aç</button>
                </div>
            </div>
        </div>

        <div class="app-content">
            <div class="title-content">
                 <h1>{{ $t("home")}}</h1> 
            </div>
            <div class="sub-title">
                <p>{{ $t("subTitle")}}</p>
            </div>
            <div class="sub-sign-title">
                <p> {{$t("headChild")}}
                </p>
            </div>
            <div class="app-input">
                <div class="input-group">
                    <input placeholder="E Posta adresi" type="text">
                </div>
                <div class="button-group">
                    <button class="startbtn">Başlayın</button>
                </div>
            </div>
        </div>


        <!-- <div class="stroke"></div> --> 
    </div>
</template>


<style src="../../assets/HomeStyle/Header.css" scoped></style>