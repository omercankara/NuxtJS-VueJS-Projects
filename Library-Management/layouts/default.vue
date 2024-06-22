<template>
    <div class="main">
        <Header style="margin-bottom: 1vh;" />
        <nuxt />
    </div>
</template>

<script>
import Header from "../components/Header"
export default {
    components: {
        Header
    }
}
</script>

<style scoped lang="scss">
.main {
    display: flex;
    flex-direction: column;
}
</style>