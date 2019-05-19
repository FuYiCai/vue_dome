import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/member/member'
import Shopcart from '@/components/shopcart/shopcart'
import Search from '@/components/search/search'
import NewsList from '@/components/News/NewsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Member',
      name: 'Member',
      component: Member
    },
    {
      path: '/Shopcart',
      name: 'Shopcart',
      component: Shopcart
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },{
      path:'/news/list',
      name:'NewsList',
      component:NewsList
    }
  ]
})
