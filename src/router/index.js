import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import sort from '@/components/sort'
import going from '@/components/going'
import shopCart from '@/components/shopCart'
import user from '@/components/user'
import register from '@/components/register'
import login from '@/components/login'
import details from '@/components/details'
import article from '@/components/article'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: { keepAlive: true }
    },
    {
      path: '/sort',
      name: 'sort',
      component: sort
    },
    {
      path: '/going',
      name: 'going',
      component: going,
      meta: { keepAlive: true }
    },
    {
      path: '/shopCart',
      name: 'shopCart',
      component: shopCart
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/article/:id',
      name: 'article',
      component: article
    }
  ]
})
