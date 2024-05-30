<script>
export default {
    props: {
        updateObject: {
            required: false
        }
    },
    data() {
        return {
            imageUrl: null,
            file: null,
            showModal: false,
            UpdateItem: {},
            Resimler: {
                files: []
            },
        }
    },
    mounted() {
        this.UpdateItem = { ...this.updateObject };
    },
    methods: {
        handleFileChange(e) {
            const files = this.$refs.files.files;
            this.Resimler.files = [...this.Resimler.files, ...files];

            /*DEGİŞEN GÖRSELİ UI DA ANLIK GÜNCELLE*/
            const file = e.target.files[0];
            this.file = file;
            const reader = new FileReader();
            reader.onload = e => {
                this.imageUrl = e.target.result;
            };
            reader.readAsDataURL(file);


        },
        async updateData() {
            const formData = new FormData()
            formData.append('id', this.UpdateItem.id)
            formData.append('Baslik', this.UpdateItem.Baslik)
            formData.append('Yazar', this.UpdateItem.Yazar)
            formData.append('Yayinevi', this.UpdateItem.Yayinevi)
            formData.append('Kategori', this.UpdateItem.Kategori)
            formData.append('Dil', this.UpdateItem.Dil)
            formData.append('Sayfa', this.UpdateItem.Sayfa)
            if (this.Resimler.files.length > 0) {
                formData.append('image', this.Resimler.files[0]);
                this.UpdateItem.image = this.imageUrl;
            }

            this.$emit('updatedItemEmit', this.UpdateItem)
            this.$emit('showModal', this.showModal)
            this.$store.dispatch('editBook', formData)
            this.$swal.fire({
                title: "Tamamlandı!",
                text: "İçerik Güncellendi",
                icon: "success"
            });
        },
    }
}
</script>

<template>
    <div class="modal-container">
        <div class="app-content">
            <div class="app-left-item">
                <div class="app-row mb-2">
                    <div class="app-label">
                        <label for="">Başlık</label>
                    </div>
                    <div class="app-input">
                        <input v-model="UpdateItem.Baslik" type="text" class="form-control">
                    </div>
                </div>

                <div class="app-row mb-2">
                    <div class="app-label">
                        <label for="">Yazar</label>
                    </div>
                    <div class="app-input">
                        <input v-model="UpdateItem.Yazar" type="text" class="form-control">
                    </div>
                </div>

                <div class="app-row mb-2">
                    <div class="app-label">
                        <label for="">Yayın evi</label>
                    </div>
                    <div class="app-input">
                        <input v-model="UpdateItem.Yayinevi" type="text" class="form-control">
                    </div>
                </div>
            </div>
            <div class="app-right-item">
                <div class="app-row mb-2">
                    <div class="app-label">
                        <label for="">Kategori</label>
                    </div>
                    <div class="app-input">
                        <input v-model="UpdateItem.Kategori" type="text" class="form-control">
                    </div>
                </div>

                <div class="app-row mb-2">
                    <div class="app-label">
                        <label for="">Dil</label>
                    </div>
                    <div class="app-input">
                        <input v-model="UpdateItem.Dil" type="text" class="form-control">
                    </div>
                </div>

                <div class="app-row mb-2">
                    <div class="app-label">
                        <label for="">Sayfa</label>
                    </div>
                    <div class="app-input">
                        <input v-model="UpdateItem.Sayfa" type="text" class="form-control">
                    </div>
                </div>
            </div>
        </div>
        <div class="app-image-content d-flex justify-content-center mb-3">
            <button @click="$refs.files.click()" class="btn btn-primary w-50  h-100">
                <img style="max-height:30px !important; object-fit: covere;" src="../../static/img.png" alt="">
                <h3 class="text-center">İmage Upload</h3>
            </button>
            <input accept="jpeg,png,jpg" class="form-control" ref="files" @change="handleFileChange"
                style="display: none;" type="file">
        </div>
        <div class="app-button-content">
            <div class="app-success">
                <button @click="updateData()" class="btn btn-success w-100 ">Tamamla</button>

            </div>
            <div class="app-danger">
                <button class="btn btn-danger w-100 ">Vazgeç</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.modal-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .app-content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: row;

        .app-left-item {
            width: 45%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .app-right-item {
            width: 45%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        label {
            font-family: Arial, Helvetica, sans-serif;
            color: rgb(75, 75, 75);
            font-weight: 600;
            font-size: 13px;
        }
    }

    .app-image-content {
        width: 100%;
        height: 80px;
    }

    .app-button-content {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .app-success {
            width: 45%;

            .btn-success {
                background-color: rgb(0, 143, 0);
                font-family: Arial, Helvetica, sans-serif;
                font-weight: bold;
            }
        }

        .app-danger {
            width: 45%;
        }
    }


}
</style>
