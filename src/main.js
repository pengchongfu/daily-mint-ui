// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import NotFound from './components/NotFound'
import Splash from './components/Splash'
import Latest from './components/Latest'

Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '/splash',
    component: Splash
  },
  {
    path: '/',
    redirect: '/splash',
    component: App,
    children: [
      {
        path: '/latest',
        component: Latest
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render (h) {
    return (
      <router-view></router-view>
    )
  }
})
