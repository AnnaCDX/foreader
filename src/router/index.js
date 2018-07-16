import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Library from '../pages/Library/Library'
import Rank from '../pages/Rank/Rank'
import Login from '../pages/Login/Login'
import Msite from '../pages/Msite/Msite'
import HomePage from '../pages/HomePage/HomePage'
import Wallet from '../pages/Wallet/Wallet'
import Collection from "../pages/Collection/Collection"
import Shelter from "../pages/Shelter/Shelter"
import Reading from "../pages/Reading/Reading"
import ExpenseRecord from '../components/ExpenseRecord/ExpenseRecord'
import RechargeRecord from "../components/RechargeRecord/RechargeRecord"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home',
      meta:{
        showHead:true
      }
    },
    {
      path:'/home',
      component:Home,
      meta:{
        showHead:true
      },

    },
    {
      path:'/rank',
      component:Rank,
      meta:{
        showHead:true
      }
    },
    {
      path:'/library',
      component:Library,
      meta:{
        showHead:true
      }
    },
    {
      path:'/login',
      component:Login,
      meta:{
        showHead:true
      }
    },
    {
      path:'/reading',
      component:Reading,
      meta:{
        showHead:true
      }
    },
    {
      path:'/msite',
      component:Msite,
      children:[
        {
          path: '/msite/homePage',
          component: HomePage
        },
        {
          path: '/msite/collection',
          component: Collection
        },
        {
          path: '/msite/wallet',
          component: Wallet,
          children:[
            {
              path: '/msite/wallet/expenseRcd',
              component: ExpenseRecord,
            },
            {
              path: '/msite/wallet/rechargeRcd',
              component: RechargeRecord,
            },
            {
              path: '/msite/wallet',
              redirect: "/msite/wallet/expenseRcd",
            }
          ]

        },
        {
          path: '/msite/shelter',
          component: Shelter
        },
        {
          path: '',
          redirect: '/msite/homePage'
        }
      ]

    }
  ]
})
