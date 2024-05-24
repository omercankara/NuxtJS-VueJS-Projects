<template>
        
        <div>
                <mymenu/>
                <router-view></router-view>
        </div>
</template>


<script>
import mymenu from "./views/menuView.vue"
export default {
        components:{
                mymenu
        }

}
</script>