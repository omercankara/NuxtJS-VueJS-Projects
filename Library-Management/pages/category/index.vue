<template>
    <div class="app-form">

        <div class="app-info">

            <div class="app-card-box">
                <div class="app-person-list" v-for="i in itemLength" :key="i.title" :style="i.style">
                    <div class="img-content">
                        <i class='bx bx-book-open'></i>
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

        <b-modal size="md" v-model="showCreateModal" hide-footer>
            <div class="app-container mb-3">
                <div class="titleContent"><label>Title</label></div>
                <div class="inputContent"><input v-model="addObject.Category" placeholder="Enter Category."
                        type="text" class="form-control"></div>
            </div>
            <div class="button-group">
                <button @click="createData()" class="btn btn-success btn-sm">Create</button>
                <button class="btn btn-danger btn-sm">Cancel</button>
            </div>
        </b-modal>

        <b-modal size="md" v-model="showUpdateModal" hide-footer>
            <div class="app-container mb-3">
                <div class="titleContent"><label>Başlık</label></div>
                <div class="inputContent"><input v-model="update.Category" placeholder="Enter Category." type="text"
                        class="form-control"></div>
            </div>
            <div class="button-group">
                <button @click="updatePost()" class="btn btn-success btn-sm">Save</button>
                <button class="btn btn-danger btn-sm">Cancel</button>
            </div>
        </b-modal>


        <div class="app-search">
            <input v-model="searchTerm" placeholder="Arama..." type="text">
            <i class="bx bx-search"></i>
        </div>
        <AppTable :categoryList="categoryList" @updateData="updateHandler" @modalVisible="showModalHandler" />
    </div>
</template>


<script>
import { BModal, VBModal, BButton } from 'bootstrap-vue'
import AppTable from "../../components/categoryList/appTable"
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
            showCreateModal: false,
            showUpdateModal: null,
            Kategori: null,
            searchTerm: '',
            update: {},
            addObject: {
                Category: ''
            }
        }
    },
    methods: {
        async createData() {
            console.log(this.Kategori)
            if (!this.addObject.Category) {
                this.$swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "TAYLAN SASİ",
                    customClass: {
                        container: 'custom-swal-height',
                        title: 'custom-swal-text',
                    },
                    confirmButtonText: "Tamam",
                });
            } else {
                const formData = new FormData();
                formData.append('Category', this.addObject.Category);
                this.$toast.success('Kayıt İşlemi Tamamlandı!')
                this.showModal = false
                const formDataObject = {};
                for (const [key, value] of formData.entries()) {
                    formDataObject[key] = value;
                }
                this.$store.dispatch('createCategory', formDataObject)
                //this.$store.dispatch('bookList')
                // this.showCreateModal = false
            }
        },
        async updatePost() {
            const formData = new FormData()
            formData.append('Category', this.update.Category)
            formData.append('id', this.update.id)
            const formDataObject = {};
            for (const [key, value] of formData.entries()) { //js nesnesine çevir formDatayı
                formDataObject[key] = value;
            }
            await this.$store.dispatch('editCategory', formDataObject);
            this.$store.commit('updateCategory', { id: this.update.id, Category: this.update.Category })
            this.showUpdateModal = false
            this.$toast.success('Güncelleme İşlemi Tamamlandı!')
        },
        updateHandler(e) {
            this.update = e
        },
        showModalHandler(e) {
            this.showUpdateModal = e
        }
    },
    computed: {
        categoryList() {
            let categoryList = this.$store.getters.getCategoryList
            let item = categoryList.filter(item => item.Category.toLowerCase().includes(this.searchTerm.toLowerCase()));
            if (item) {
                return item
            }
            return categoryList
        },
        itemLength() {
            let list = [
                {
                    title: "Total Category",
                    number: this.$store.getters.getCategoryList.length,
                    style: 'background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);'
                },
            ]
            return list 
        },
    },
    async fetch({ store }) {
        await store.dispatch('categoryList');
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
                width: 20%;
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
                    width: 85%;
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

    }

    .app-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .titleContent {
            display: flex;
            align-items: center;
            width: 15%;
            text-align: center;

            label {
                margin: 0px;
            }
        }

        .inputContent {
            width: 85%;
            background-color: gainsboro;
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
</style>