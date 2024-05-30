<template>
    <div class="app-container ">
        <div class="content">
            <div class="info-container">
                <AppInfo />
            </div>

            <div class="search-container">
                <AppSearch :updateData=updateData @dataSent="handleData" :deleteIdNumber=deleteIdData />
            </div>

            <div class="table-container">
                <AppTable @updateData="updateHandler" @deleteId="deleteHandler" :data=dataList />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import AppTable from '../../components/bookListPage/appTable.vue';
import AppSearch from '../../components/bookListPage/appSearch.vue';
import AppInfo from '../../components/bookListPage/appInfo.vue';


export default {
    components: {
        AppTable,
        AppSearch,
        AppInfo
    },
    data() {
        return {
            searchTerm: '',
            dataList: [],
            deleteIdData: '',
            updateData: {}
        }
    },
    async fetch({ store }) {
        await store.dispatch('bookList');
        await store.dispatch('categoryList');
    },
   
    methods: {
        handleData(newFilterList) {
            this.dataList = newFilterList
        },
        deleteHandler(e) {
            this.deleteIdData = e
        },
        updateHandler(e) {
            this.updateData = e
        }

    },
}
</script>


<style scoped lang="scss">
@import url("../../assets/bookListPage/bookListPage.scss");
</style>