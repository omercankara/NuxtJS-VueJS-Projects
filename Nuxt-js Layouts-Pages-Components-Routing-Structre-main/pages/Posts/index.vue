<template>
    <div class="d-flex flex-column">
      <PostList/>
      <About/>
    </div>
</template>
  
  <script>
import PostList from '../../components/post/postList.vue';
import About from '../../components/home/about.vue';


 export default {
    components: { PostList, About }
} 
</script>
  
  <style scoped>
  </style>