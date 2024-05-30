<template>
    <div class="container">

        <div class="app-input-content">
            <div class="row">

                <div class="input-group">
                    <div class="label-group">
                        <label>Başlık</label>
                    </div>
                    <div class="input-content">
                        <input v-model="addObject.Baslik" type="text">
                    </div>
                </div>

                <div class="input-group">
                    <div class="label-group">
                        <label>Yazar</label>
                    </div>
                    <div class="input-content">
                        <input v-model="addObject.Yazar" type="text">
                    </div>
                </div>

                <div class="input-group">
                    <div class="label-group">
                        <label>Yayinevi</label>
                    </div>
                    <div class="input-content">
                        <input v-model="addObject.Yayinevi" type="text">
                    </div>
                </div>

            </div>
            <div class="row">

                <div class="input-group">
                    <div class="label-group">
                        <label>Kategori</label>
                    </div>
                    <div class="input-content">
                        <select v-model="addObject.Kategori">
                            <option :value=i.Category v-for="(i, index) in getCategory" :key="index">{{ i.Category }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="input-group">
                    <div class="label-group">
                        <label>Dil</label>
                    </div>
                    <div class="input-content">
                        <input v-model="addObject.Dil" type="text">
                    </div>
                </div>

                <div class="input-group">
                    <div class="label-group">
                        <label>Sayfa</label>
                    </div>
                    <div class="input-content">
                        <input v-model="addObject.Sayfa" type="text">
                    </div>
                </div>

            </div>
        </div>


        <div class="app-image-content">
            <button class="btn-light" @click="$refs.files.click()">
                <img style="max-height:55px !important;" src="../../static/img.png" alt="">
                <h3 class="text-center">İmage Upload</h3>
            </button>
            <input accept="jpeg,png,jpg" class="form-control" ref="files" @change="handleFileChange"
                style="display: none;" type="file">
        </div>
        <div class="app-button-content">
            <button @click="createData()" class="btn-success">Tamamla</button>
            <button class="btn-danger">Vazgeç</button>
        </div>
    </div>
</template>





<script>
export default {
    data() {
        return {
            addObject: {
                Baslik: '',
                Yazar: '',
                Yayinevi: '',
                Kategori: '',
                Dil: '',
                Sayfa: '',
                image: ''
            },
            Resimler: {
                files: []
            },
           
        }
    },
    methods: {
        async createData() {
            if (!this.addObject.Baslik || !this.addObject.Yazar || !this.addObject.Yayinevi || !this.addObject.Kategori || !this.addObject.Dil || !this.addObject.Sayfa) {
                this.$swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Kayıt İşlemi Tamamlanamadı. Lütfen tüm alanları doldurduğunuzdan emin olunuz",
                    customClass: {
                        container: 'custom-swal-height',
                        title: 'custom-swal-text',
                    },
                    confirmButtonText: "Tamam",
                });
            }
            const formData = new FormData();
            formData.append('Baslik', this.addObject.Baslik);
            formData.append('Yazar', this.addObject.Yazar);
            formData.append('Yayinevi', this.addObject.Yayinevi);
            formData.append('Kategori', this.addObject.Kategori);
            formData.append('Dil', this.addObject.Dil);
            formData.append('Sayfa', this.addObject.Sayfa);
            if (this.Resimler.files.length > 0) {
                formData.append('image', this.Resimler.files[0]);
            }
            this.$toast.success('Kayıt İşlemi Tamamlandı!')
            this.$store.dispatch('createBook', formData)
        },
        handleFileChange(e) {
            const files = this.$refs.files.files;
            this.Resimler.files = [...this.Resimler.files, ...files];
        }
    },
    computed: {
        getCategory() {
            return this.$store.getters.getCategoryList
        }
    }

}
</script>




<style scoped lang="scss">
@import url("../../assets/addBookPage/addBook.scss");
</style>