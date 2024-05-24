<template>
    <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
        <Post v-for="i in 5" :isAdmin="isAdmin"  />
    </div>
</template>


<script>
import Post from './post.vue';
export default {
    components: { Post },
    props:{
        isAdmin:{
            type:Boolean,
            required:false,
            default:false
        }
    }
}
</script>