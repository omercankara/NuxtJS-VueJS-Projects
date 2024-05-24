import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/homeComp.vue'
import kate from '../components/categoriesComp.vue'
import middle from '../components/middleContainer.vue'

const routes = [

        {
                path: '/',
                name: 'home',
                component: home
        },

        {
                path: '/kate',
                name: 'kate',
                component: kate
        },

                {
                path: '/middle',
                name: 'middle',
                component: middle
        },

]

const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
})

export default router


