<script>
export default {
    data() {
        return {
            chooseContent: [
                {
                    title: "Netflix Nedir ?",
                    icon: "+",
                    content: "Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir streaming hizmetidir."
                },
                {
                    title: "Nerede İzleyebilirim ? ",
                    icon: "+",
                    content: "İstediğiniz yerde, istediğiniz zaman izleyin. Bilgisayarınızda netflix.com adresinden veya akıllı TV'ler, akıllı telefonlar, tabletler, medya oynatıcılar ve oyun konsolları dahil Netflix uygulamasını sunan, internet bağlantılı herhangi bir cihazda anında izlemek için Netflix hesabınızla oturum açın."
                },
                {
                    title: "Nasıl İptal Ederim ?",
                    icon: "+",
                    content: "Netflix esnektir. Sinir bozucu hiçbir sözleşme ve taahhüt yoktur. Hesabınızı çevrimiçi olarak iki tıklamayla kolayca iptal edebilirsiniz. İptal ücreti yoktur - hesabınızı istediğiniz zaman başlatın veya durdurun."
                },

                {
                    title: "Netflix'te Ne İzleyebilirim ?",
                    icon: "+",
                    content: "Netflix, uzun metrajlı filmler, belgeseller, diziler ve programlar, anime, ödüllü Netflix orijinal içerikleri ve daha fazlasından oluşan kapsamlı bir kütüphaneye sahiptir. İstediğiniz her zaman, istediğiniz kadar çok şey izleyin."
                },
                {
                    title: "Netflix Çocuklar İçin uygun mudur ?",
                    icon: "+",
                    content: "Üyeliğinize dâhil olan Netflix Çocuk deneyimi, çocukların ailece izlenebilecek dizi ve filmleri kendilerine özel bir alanda izlemelerini sağlarken kontrolü ebeveynlere verir"
                }

            ],
            content: '',
            selectedİtem: false,
            isOpen: false,
        }
    },
    methods: {
        plusButton(e) {
            this.content = e.content
            this.selectedİtem = e.title
            this.isOpen = !this.isOpen
            if (this.isOpen === false) {
                this.content = ""
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="text-title">
            <h1>Sıkça Sorulan Sorular</h1>
        </div>
        <div v-for="(i, index) in chooseContent" :key="index" class="app-choose">

            <div class="app-item" @click="plusButton(i)">
                <div class="app-choose-text">
                    <p>{{ i.title }}</p>
                </div>
                <div class="app-choose-icon">
                    <p>{{ i.icon }}</p>
                </div>
            </div>

            <div class="app-choose-content" :class="{ 'animated': selectedİtem === i.title && isOpen == true }">
                <p v-if="selectedİtem == i.title">{{ content }}</p>
            </div>

        </div>

        <div class="banner-content">
            <div class="banner-title">
                <p>İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta
                    adresinizi girmek.</p>
            </div>
            <div class="input-group">
                <div class="input-content">
                    <input placeholder="E Posta Adresi" type="text">
                </div>
                <div class="button-content">
                    <button class="Start-btn">Başlayın</button>
                </div>
            </div>
        </div>

    </div>
</template>


<style scoped src="../../assets/HomeStyle/choosePage.css"></style>
