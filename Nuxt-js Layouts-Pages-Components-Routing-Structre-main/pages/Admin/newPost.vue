<template>
    <div>
        <PostForm @submit="savePost($event)"  />
    </div>
</template>
<script>
import PostForm from '../../components/admin/postForm.vue';
export default {
    components: { PostForm },
    methods:{
        savePost(post){
            console.log(post)
        }
    }
}
</script>