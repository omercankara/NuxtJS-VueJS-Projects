import { createApp } from 'vue'
import appHeading from "./components/Uİ/appHeading.vue"
import App from './App.vue'
import "./assets/index.css"


createApp(App).mount('#app')
const app  = createApp(App)
app.component("heading",appHeading) //global component
app.mount("#app")

