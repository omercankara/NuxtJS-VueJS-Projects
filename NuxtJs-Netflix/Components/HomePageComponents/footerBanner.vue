<template>
    <div class="container">
        <div class="footer">
            <div class="title"></div>
            <div class="content">
                <div class="footer-one" v-for="(footer, index) in mainArray" :key="index">
                    <p v-for="(item, itemIndex) in footer.items" :key="itemIndex">{{ item }}</p>
                </div>
            </div>
            <div class="chooseContent">
                <select>
                    <option v-for="(i, index) in select"> {{ i }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mainArray: [
                { name: 'Footer 1', items: ["SSS", "Yatırımcı İlişkileri", "Kullanım Koşulları", "Bize Ulaşın"] },
                { name: 'Footer 2', items: ['Yardım Merkezi', 'İş İmkanları', 'Gizlilik', 'Hız Testi'] },
                { name: 'Footer 3', items: ['Hesap', 'Hediye Kartı Kullan', 'Çerez Terchileri', 'Yasal Hükümler'] },
                { name: 'Footer 3', items: ['Medya Merkezi', 'İzleme Yolları', 'Kurumsal Bilgiler', 'Sadece Netflixte'] },
            ],
            select: ["Türkçe", "İngilizce"]
        }
    }
}
</script>



<style scoped src="../../assets/homeStyle/footer.css"></style>