import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2e155c43 = () => interopDefault(import('..\\pages\\Admin\\index.vue' /* webpackChunkName: "pages/Admin/index" */))
const _1949ad82 = () => interopDefault(import('..\\pages\\Posts\\index.vue' /* webpackChunkName: "pages/Posts/index" */))
const _65179091 = () => interopDefault(import('..\\pages\\Admin\\newPost.vue' /* webpackChunkName: "pages/Admin/newPost" */))
const _fde0cc12 = () => interopDefault(import('..\\pages\\Admin\\_postId\\index.vue' /* webpackChunkName: "pages/Admin/_postId/index" */))
const _504aaf0a = () => interopDefault(import('..\\pages\\Posts\\_postId\\index.vue' /* webpackChunkName: "pages/Posts/_postId/index" */))
const _32f368fc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Admin",
    component: _2e155c43,
    name: "Admin"
  }, {
    path: "/Posts",
    component: _1949ad82,
    name: "Posts"
  }, {
    path: "/Admin/newPost",
    component: _65179091,
    name: "Admin-newPost"
  }, {
    path: "/Admin/:postId",
    component: _fde0cc12,
    name: "Admin-postId"
  }, {
    path: "/Posts/:postId",
    component: _504aaf0a,
    name: "Posts-postId"
  }, {
    path: "/",
    component: _32f368fc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
