<template>
    <div class="app-container">
        <div class="head">
            <Header />
        </div>
        <div class="main">
            <nuxt />
        </div>
    </div>
</template>


<style  lang="scss">
    .app-container{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
    }
    .head{
        width: 10%;
        background-color: red;
    }
    .main{
        width: 90%;
    }
</style>



<script>
import Header from "../components/Menu/Header.vue"
export default {
    components: {
        Header
    }
}
</script>