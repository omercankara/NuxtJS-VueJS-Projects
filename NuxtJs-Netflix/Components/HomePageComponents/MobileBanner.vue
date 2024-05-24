<template>
    <div class="container">
        <div class="mobile-content">
            <img class="mobile-image" src="../../static/mobil.jpg" alt="">,
            <div class="gif-card">
                <img class="gifimg" src="../../static/boxshot.png" alt="">
                <div class="gifCardText">
                    <h5>Stranger Things</h5>
                    <p>İndiriliyor...</p>
                </div>
                <img class="download-gif" src="../../static/down.gif" alt="">
            </div>
        </div>
        <div class="text-content">
            <div class="title-content">
                <h1>{{ $t('mobileTextTitle') }}</h1>,
            </div>
            <div class="sub-content">
                <p>{{ $t('mobileSubText') }}</p>
            </div>
           
        </div>
    </div>
</template>

<style scoped src="../../assets/HomeStyle/mobileBanner.css"></style>