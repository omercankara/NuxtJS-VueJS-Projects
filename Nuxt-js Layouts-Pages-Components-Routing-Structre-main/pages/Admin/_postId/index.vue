<template>
    <div>
        <PostForm :is-update="true"   />
    </div>
</template>
<script>
import PostForm from '../../../components/admin/postForm.vue';
export default {
    components: { PostForm }
}
</script>