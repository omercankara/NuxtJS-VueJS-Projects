<script>
export default {
    data() {
        return {
            Category: ''
        }
    },
    methods: {
        createData() {
            this.$swal.fire({
                title: "Tamamlandı!",
                text: "Kategori Eklendi",
                icon: "success"
            });
            this.$store.dispatch('createCategory', this.Category)
            this.Category = ''
        }
    }
}
</script>

<template>
    <div class="app-container">

        <div class="app-form">
            <div class="app-title">
                <h2>Kategori Kayıt Alanı</h2>
            </div>
            <div class="input-content">
                <div class="app-label">
                    <label for="">Başlık</label>
                </div>
                <div class="app-input">
                    <input v-model="Category" placeholder="İçerik Giriniz" ype="text">
                </div>
            </div>
            <div class="save-container">
                <div class="app-success">
                    <button @click="createData()" class="success">Tamamla</button>
                </div>
                <div class="app-danger">
                    <button class="danger">Vazgeç</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import url("../../assets/categoryPage/category.scss");
</style>