<script>
import { mapState } from "vuex"
export default {
    data() {
        return {
            searchTerm: '',
            selectedCategory: '',
            filtered: []
        }
    },
    methods:{
        clear(){
            this.selectedCategory = ''
        }
    },
    props: {
        deleteIdNumber: {
            required: false
        },
        updateData: {
            required: false
        }
    },
    computed: {
        bookList() {
            return this.$store.getters.getBookList
        },
        category() {
            return this.$store.getters.getCategoryList
        }
    },
    watch: {
        deleteIdNumber: {
            handler(newVal) {
                this.filtered = !newVal ? this.bookList : this.bookList.filter(item => item.id != newVal.id)
            },
            immediate: true
        },
        selectedCategory: {
            handler(newVal) {
                console.log(newVal)
                this.filtered = newVal == '' ? this.bookList : this.bookList.filter(item => item.Kategori === newVal.Kategori)
                let item = this.filtered = newVal == '' ? this.bookList : this.bookList.filter(item => item.Kategori === newVal)
                console.log(item)
            }
        },
        updateData: {
            handler(newVal) {
                let item = this.filtered.find(book => book.id === newVal.id)
                if (item) {
                    this.$store.commit('updateBook', { id: newVal.id, Baslik: newVal.Baslik, Yazar: newVal.Yazar, Yayinevi: newVal.Yayinevi, Kategori: newVal.Kategori, Dil: newVal.Dil, Sayfa: newVal.Sayfa, image: newVal.image })
                }
            },
            deep: true
        },
        searchTerm: {
            handler(newSearchTerm) {
                this.filtered = newSearchTerm === '' ? this.bookList : this.bookList.filter(item => item.Baslik.toLowerCase().includes(newSearchTerm.toLowerCase()));
            },
            immediate: true
        },
        filtered: {
            handler(newFilteredData) {
                this.$emit('dataSent', newFilteredData);
            },
            immediate: true
        }
    }
}
</script>


<template>
    <div class="table-settings">
        <div class="app-container">
            <div class="input-container">
                <input v-model="searchTerm" placeholder="Arama..." type="text">
            </div>
            <div class="select-container">
                <select v-model="selectedCategory" name="" id="">
                    <option v-for="(item, index) in category" :key="index" :value="item.Category"
                        :selected="index === 0">{{ item.Category }}</option>
                </select>
            </div>
            <div class="clear-container">
                <i  @click="clear()" style="font-size: 25px; color: white;" class='bx bx-refresh'></i>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import url("../../assets/bookListPage/appSearch.scss");
</style>