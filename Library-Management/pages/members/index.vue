<template>
    <div class="app-form">
        <!--İNFO AND CREATE BUTTON-->
        <div class="app-info">


            <div class="app-card-box">
                <div class="app-person-list" v-for="i in itemLength" :key="i.title" :style="i.style">
                    <div class="img-content">
                        <i :class=i.icon></i>
                    </div>
                    <div class="info">
                        <p class="number">{{ i.number }}</p>
                        <p class="totalBook">{{ i.title }}</p>
                    </div>
                </div>
            </div>

            <div class="app-button">
                <button @click="showCreateModal = true" class="btn btn">Create +</button>
            </div>



        </div>

        <!-- CREATE MODAL-->
        <b-modal size="lg" v-model="showCreateModal" id="modal-1" @hide="closeModal" hide-footer title="Yeni Kayıt">
            <div class="app-container">
                <div class="formContent">
                    <div class="app-right">
                        <div class="input-group">
                            <label for="">First Name</label>
                            <input v-model="addObject.isim" placeholder="Enter First Name..." type="text"
                                class="form-control">
                        </div>
                        <div class="input-group">
                            <label for="">Last Name</label>
                            <input v-model="addObject.soyisim" placeholder="Enter Last name..." type="text"
                                class="form-control">
                        </div>
                        <div class="input-group">
                            <label for="">ID Number</label>
                            <input v-model="addObject.tc" placeholder="Enter ID Number..." type="text"
                                class="form-control">
                        </div>
                    </div>
                    <div class="app-left">
                        <div class="input-group">
                            <label for="">Phone</label>
                            <input v-model="addObject.telefon" placeholder="Enter Phone..." type="text"
                                class="form-control">
                        </div>
                        <div class="input-group">
                            <label for="">Address</label>
                            <input v-model="addObject.adres" placeholder="Enter Adress..." type="text"
                                class="form-control">
                        </div>
                        <div class="input-group">
                            <label for="">Gender</label>
                            <input v-model="addObject.cinsiyet" placeholder="Enter Gender..." type="text"
                                class="form-control">
                        </div>
                    </div>
                </div>

                <hr>
                <div class="app-button">
                    <button @click="createData()" class="btn btn-success">Create</button>
                    <button class="btn btn-danger">Cancel</button>
                </div>
            </div>
        </b-modal>


        <!--UPDATE MODAL-->
        <b-modal size="lg" v-model="showUpdateModal" id="modal-1" @hide="closeModal" hide-footer title="Yeni Kayıt">
            <div class="app-container">
                <div class="formContent">
                    <div class="app-right">
                        <div class="input-group">
                            <label for="">Name</label>
                            <input v-model="updateObject.isim" placeholder="Enter Name..." type="text"
                                class="form-control">
                        </div>
                        <div class="input-group">
                            <label for="">Last name</label>
                            <input v-model="updateObject.soyisim" placeholder="Enter Last name..." type="text"
                                class="form-control">
                        </div>
                        <div class="input-group">
                            <label for="">ID Number</label>
                            <input v-model="updateObject.tc" placeholder="Enter ID Number..." type="text"
                                class="form-control">
                        </div>
                    </div>
                    <div class="app-left">
                        <div class="input-group">
                            <label for="">Phone</label>
                            <input v-model="updateObject.telefon" placeholder="Enter Phone..." type="text"
                                class="form-control">
                        </div>
                        <div class="input-group">
                            <label for="">Adress</label>
                            <input v-model="updateObject.adres" placeholder="Sayfa sayısı giriniz..." type="text"
                                class="form-control">
                        </div>
                        <div class="input-group">
                            <label for="">Gender</label>
                            <input v-model="updateObject.cinsiyet" placeholder="Sayfa sayısı giriniz..." type="text"
                                class="form-control">
                        </div>
                    </div>
                </div>

                <hr>
                <div class="app-button">
                    <button @click="updatePost()" class="btn btn-success">Save</button>
                    <button class="btn btn-danger">Cancel</button>
                </div>
            </div>
        </b-modal>

        <!-- SEARCH İNPUT-->
        <div class="app-search">
            <input v-model="searchTerm" placeholder="Arama..." type="text">
            <i class="bx bx-search"></i>
        </div>

        <AppTable style="width: 90%;" @modalVisible="modalVisible" @updateData="updateHandlerData"
            :personList="filtered" />
    </div>
</template>

<script>
import { BModal, VBModal, BButton } from 'bootstrap-vue'
import AppTable from "../../components/uyeList/appTable"

export default {
    // head() {
    //     return {
    //         link: [
    //             {
    //                 rel: 'stylesheet',
    //                 href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
    //             },
    //             {
    //                 rel: 'stylesheet',
    //                 href: 'https://cdn.jsdelivr.net/npm/bootstrap-vue@2.21.2/dist/bootstrap-vue.css'
    //             }
    //         ],
    //         script: [
    //             {
    //                 src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js',
    //                 type: 'text/javascript'
    //             }
    //         ]
    //     }
    // },
    directives: {
        'b-modal': VBModal
    },
    components: {
        BModal,
        BButton,
        AppTable
    },
    data() {
        return {
            addObject: {
                isim: '',
                soyisim: '',
                tc: '',
                telefon: '',
                adres: '',
                cinsiyet: ''
            },
            updateObject: {},
            showCreateModal: false,
            showUpdateModal: false,
            searchTerm: '',

        }
    },
    computed: {
        filtered() {
            let personList = this.$store.getters.getPersonList
            let item = personList.filter(item => item.tc.toLowerCase().includes(this.searchTerm.toLowerCase()));
            if (item) {
                return item
            }
            return person
        },
        itemLength() {
            let list = [
                {
                    title: "Total Members",
                    number: this.$store.getters.getPersonList.length,
                    style: 'background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);',
                    icon: 'bx bx-user'
                },
            ]
            return list
        },
    },

    methods: {
        closeModal() {
            this.showModal = false;
        },
        handleFileChange(e) {
            const files = this.$refs.files.files;
            this.Resimler.files = [...this.Resimler.files, ...files];
            // console.log(this.Resimler.files)

            /*DEGİŞEN GÖRSELİ UI DA ANLIK GÜNCELLE*/
            const file = e.target.files[0];
            this.file = file;
            const reader = new FileReader();
            reader.onload = e => {
                this.imageUrl = e.target.result;
                // console.log(e.target.result)
            };
            reader.readAsDataURL(file);

        },
        async createData() {
            console.log(this.Kategori)
            const isEmptyField = Object.values(this.addObject).some(value => !value)
            if (isEmptyField) {
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
            } else {
                const formData = new FormData();
                formData.append('isim', this.addObject.isim);
                formData.append('soyisim', this.addObject.soyisim);
                formData.append('tc', this.addObject.tc);
                formData.append('telefon', this.addObject.telefon);
                formData.append('adres', this.addObject.adres);
                formData.append('cinsiyet', this.addObject.cinsiyet);
                this.$toast.success('Kayıt İşlemi Tamamlandı!')
                this.showModal = false
                const formDataObject = {};
                for (const [key, value] of formData.entries()) {
                    formDataObject[key] = value;
                }
                this.$store.dispatch('createPerson', formDataObject)
            }
        },
        async updatePost() {
            const formData = new FormData();
            formData.append('id', this.updateObject.id)
            formData.append('isim', this.updateObject.isim);
            formData.append('soyisim', this.updateObject.soyisim);
            formData.append('tc', this.updateObject.tc);
            formData.append('telefon', this.updateObject.telefon);
            formData.append('adres', this.updateObject.adres);
            formData.append('cinsiyet', this.updateObject.cinsiyet);

            const formDataObject = {};
            for (const [key, value] of formData.entries()) { //js nesnesine çevir formDatayı
                formDataObject[key] = value;

            }

            this.$store.dispatch('editPerson', formDataObject)
            this.$store.commit('updatePerson', formDataObject)

            this.showUpdateModal = false
            this.$toast.success('Güncelleme İşlemi Tamamlandı!')


        },
        updateHandlerData(e) {
            this.updateObject = e
            //console.log(e)
        },
        modalVisible(e) {
            this.showUpdateModal = e
        }
    },

    async fetch({ store }) {
        await store.dispatch('personList');
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1440px) {
    .app-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;



        .app-info {
            width: 90%;
            height: 10vh;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;

            .app-card-box {
                width: 25%;

                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 10px 0px 10px 10px;

                .app-person-list {
                    width: 65%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    box-shadow: 0px 3px 4px 0px rgb(204, 204, 204);
                    border-radius: 1vh;
                    color: black;
                    font-weight: bold;
                    font-family: 'Lato', sans-serif;
                    font-size: 14px;

                    .img-content {
                        width: 40%;
                        height: 40%;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .bx {
                            font-size: 25px;
                            color: black;
                        }
                    }

                    .info {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 50%;
                        width: 45%;

                        .number {
                            font-weight: bold;
                            margin: 0px;
                        }

                        .totalBook {
                            margin: 0px;
                        }
                    }
                }
            }


            .app-button {
                display: flex;
                height: 100%;
                justify-content: flex-start;
                align-items: center;
                width: 10%;

                button {
                    height: 40%;
                    width: 100%;
                    margin: 0px;
                    padding: 0px;
                    color: black;
                    background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
                }
            }

            .app-book-size {
                height: 100%;
                width: 10%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: rgb(0, 30, 75);
                border-radius: 5px;

                p {
                    font-size: 15px;
                    margin: 0px;
                    font-family: Arial, Helvetica, sans-serif;
                    color: white;
                }

                .number {
                    background-color: rgb(0, 12, 173);
                    width: 30%;
                    text-align: center;
                    padding: 0px;
                    margin: 0px;
                    border-radius: 1vh;
                }
            }
        }

        .app-search {
            display: flex;
            align-items: flex-end;
            width: 90%;
            margin-bottom: 1vh;

            input {
                border-top: none;
                border-left: none;
                border-right: none;
                border-bottom: 1px solid black;
            }

            i {
                font-size: 20px;
            }
        }

    }

    .app-container {
        display: flex;
        flex-direction: column;

        .formContent {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            .app-right {
                display: flex;
                justify-content: space-around;
                flex-direction: column;
                width: 45%;
                height: 30vh;

                .input-group {
                    display: flex;
                    flex-direction: column;

                    label {
                        font-size: 16px;
                        color: rgb(107, 107, 107);
                        font-family: Arial, Helvetica, sans-serif;
                    }

                    input {
                        width: 100%;
                    }
                }
            }

            .app-left {
                display: flex;
                justify-content: space-around;
                flex-direction: column;
                width: 45%;
                height: 30vh;

                .input-group {
                    display: flex;
                    flex-direction: column;

                    label {
                        font-size: 16px;
                        color: rgb(121, 121, 121);
                        font-family: Arial, Helvetica, sans-serif;
                    }

                    input {
                        width: 100%;
                    }
                }
            }
        }

        .app-image-content {
            width: 100%;
            height: 8vh;
            display: flex;
            justify-content: center;
            align-items: center;


            button {
                border: none;
                border-radius: 1vh;
                width: 40%;
                height: 50%;
                background-color: rgb(206, 248, 255);
            }
        }

        .app-button {
            display: flex;
            justify-content: space-around;
            width: 23%;
        }
    }

}
</style>
