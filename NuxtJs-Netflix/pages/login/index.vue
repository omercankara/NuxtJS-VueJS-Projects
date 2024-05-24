<template>
    <div class="container">
        <div class="head">
            <div class="logo">
                <img src="../../static/Logo.png" alt="">
            </div>
        </div>
        <div class="loginContent">
            <div class="app-login">

                <div class="app-title">
                    <div class="title-content">
                        <h1>Oturum Aç</h1>
                    </div>
                </div>

                <div class="app-input">
                    <div class="app-input-content">
                        <input placeholder="E Posta veya cep telefonu numarası" type="text">
                        <input placeholder="Parola Giriniz" type="text">
                    </div>
                </div>

                <div class="app-button">
                    <div class="app-button-content">
                        <button class="loginButton">
                            Oturum Aç
                        </button>
                        <p>Veya</p>
                        <button class="securityButton">
                            Oturum Açma Kodu Kullan
                        </button>
                    </div>
                </div>

                <div class="app-footer">
                    <div class="app-password-title">
                        <h3>Parolayı mı unuttunuz?</h3>
                    </div>
                    <div class="app-remember">
                        <div class="app-check-container">
                            <input class="checkİtem" type="checkbox">
                        </div>
                        <div class="app-check-text">
                            <h5>Beni Hatırla</h5>
                        </div>
                    </div>
                    <div class="app-register-text">
                        <p> Netflix'e katılmak ister misiniz? Şimdi kaydolun.</p>
                    </div>
                    <div class="app-captcha">
                        <p>Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor. <span style="color: blue;">Daha fazla
                            bilgi alın.</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {

}
</script>


<style src="../../assets/LoginStyle/loginPage.css" scoped></style>


<!-- <div class="app-title"></div>
<div class="app-input"></div>
<div class="app-button"></div>
<div class="app-footer"></div> -->