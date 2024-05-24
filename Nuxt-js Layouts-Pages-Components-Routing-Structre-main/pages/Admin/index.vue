<template>
    <div>
        <div class="container d-flex justify-content-center align-items-center">
            <button class="btn btn-dark" @click="$router.push('/admin/newPost')">Yeni Bir Yazı Ekle</button>
        </div>
        <PostList :is-admin="true" />
    </div>
</template>
  

<script>
import PostList from '../../components/post/postList.vue';
export default {
    layout:"Admin",
    components: { PostList },
   
}
</script>
  

  