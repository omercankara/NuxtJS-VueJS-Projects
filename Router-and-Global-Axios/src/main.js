import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import axios from "axios"
import {appAxios} from './utils/appAxios'


const app = 
createApp(App); 
app.use(router)
app.mount('#app')
app.config.globalProperties.$axios = axios
app.config.globalProperties.$appAxios = appAxios





