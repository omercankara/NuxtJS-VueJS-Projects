<script>
import { BModal, VBModal, BButton } from 'bootstrap-vue'
import appModal from "../bookUpdate/appModal.vue"
export default {
    head() {
        return {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap-vue@2.21.2/dist/bootstrap-vue.css'
                }
            ],
            script: [
                {
                    src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js',
                    type: 'text/javascript'
                }
            ]
        }
    },
    data() {
        return {
            showModal: false,
            updateObject:{}
        }
    },
    components: {
        BModal,
        BButton,
        appModal
    },
    directives: {
        'b-modal': VBModal
    },
    props: {
        data: Array
    },
    methods: {
        deleteItem(e) {
            let id = {
                id: e.id
            }
            this.$swal.fire({
                title: "Silmek İstiyor Musunuz ?",
                text: "Silme işlemi tamamlandıktan sonra geri alınamaz",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "green",
                cancelButtonColor: "#d33",
                confirmButtonText: "Evet, Sil !",
                cancelButtonText: "İptal !"
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$emit('deleteId', id);
                    this.$swal.fire({
                        title: "Tamamlandı!",
                        text: "İlgili Kayıt Listeden Kaldırıldı",
                        icon: "success"
                    });
                    this.$store.dispatch('deleteBook', id)
                }
            });
        },
        updateItem(e) {
            this.showModal = true
            this.updateObject = e
            //console.log(e)
        },
        modalValue(val){
            this.showModal = val
        },
        updateItemEmits(val){
            this.$emit('updateData',val)
        }
    }
}
</script>


<template>

    <div class="app-table">
        <b-modal v-model="showModal" id="modal-1" size="lg" hide-footer  title="Güncelleme Alanı" style="height: 50vh;">
           <appModal  @updatedItemEmit="updateItemEmits"  @showModal="modalValue" :updateObject=updateObject />
        </b-modal>
       
        <table>
            <thead>
                <tr class="theader">
                    <th>İd</th>
                    <th>Kitap İsmi</th>
                    <th>Yazar</th>
                    <th>Yayın Evi</th>
                    <th>Kategori</th>
                    <th>Dil</th>
                    <th>Sayfa</th>
                    <th>Görsel</th>
                    <th>İşlem</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" (book, index) in data" class="tbodyes">
                    <td>{{ book.id }}</td>
                    <td>{{ book.Baslik }}</td>
                    <td>{{ book.Yazar }}</td>
                    <td>{{ book.Yayinevi }}</td>
                    <td>{{ book.Kategori }}</td>
                    <td>{{ book.Dil }}</td>
                    <td>{{ book.Sayfa }}</td>
                    <td><img style="height: 50px ;width: 50px; object-fit: contain;" :src=book.image alt=""></td>
                    <td>
                        <div style="height: 100%; display: flex; flex-direction: row; justify-content: space-around;">
                            <div class="trash">
                                <i @click="deleteItem(book)" style="font-size: 24px; color: red;"
                                    class='bx bx-trash'></i>
                            </div>
                            <div class="update">
                                <i  @click="updateItem(book)" style="font-size: 24px; color: blue;" class='bx bxs-edit'></i>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>


<style scoped lang="scss">
@import url("../../assets/bookListPage/appTable.scss");
</style>