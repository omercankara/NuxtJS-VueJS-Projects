<template>
    <div class="app-container">
        <div class="app-item">
            <AppTitle />
            <AppForm />
        </div>
    </div>
</template>






<script>
import AppForm from '../../components/addBookPage/appForm.vue';
import AppTitle from '../../components/addBookPage/appTitle.vue';

export default {
    components: {
        AppForm,
        AppTitle
    },
    async fetch({ store }) {
        await store.dispatch('categoryList');
    },
}
</script>
<style lang="scss" scoped>
.app-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .app-item {
        width: 70%;
        height: 80%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
    }

}
</style>
