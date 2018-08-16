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
import Privacy from "../pages/Privacy/Privacy"
import Aggreement from "../pages/Aggreement/Aggreement"
import Modify from "../pages/Modify/Modify"
import Reading from "../pages/Reading/Reading"
import ExpenseRecord from '../components/ExpenseRecord/ExpenseRecord'
import RechargeRecord from "../components/RechargeRecord/RechargeRecord"
import Recharge from "../pages/Recharge/Recharge"
import Detail from '../pages/Detail/Detail'
import BookInfo from '../components/BookInfo/BookInfo'
import Directory from "../components/Directory/Directory"
import PaySuccess from "../pages/PaySuccess/PaySuccess"
import Synthesize from '../components/Synthesize/Synthesize'
import Recommend from '../components/Recommend/Recommend'
import Click from '../components/Click/Click'
import Favorite from '../components/Favorite/Favorite'
import PeopleNum from "../components/PeopleNum/PeopleNum"
import Update from '../components/Update/Update'
import HotComments from '../components/HotComments/HotComments'
import Comments from "../components/Comments/Comments"
import Search from "../components/Search/Search"
import HelpCenter from "../pages/HelpCenter/HelpCenter"
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/home',
      meta:{
        showHead:true,
        keepAlive: true

      }
    },
    {
      path:"/search/:bname",
      component:Search
    },
    {
      path:'/home',
      component:Home,
      meta:{
        showHead:true,
        keepAlive: true
      },

    },
    {
      path:'/rank',
      component:Rank,
      children:[
        {
          path:"",
          redirect:"/rank/synthesize/synthesize",
          meta:{
            keepAlive: true
          }
        },
        {
          path:"/rank/synthesize/synthesize",
          component:Synthesize,
          meta:{
            showHead:true,
            keepAlive: true
          }
        },
        {
          path:"/rank/Manual/:type",
          component:Recommend,
          meta:{
            showHead:true,
            keepAlive: true
          }
        },
        {
          path:"/rank/pv/:type",
          component:Click,
          meta:{
            showHead:true,
            keepAlive: true
          }
        },
        {
          path:"/rank/fav/:type",
          component:Favorite,
          meta:{
            showHead:true,
            keepAlive: true
          }
        },
        {
          path:"/rank/cdown/:type",
          component:PeopleNum,
          meta:{
            showHead:true,
            keepAlive: true
          }
        },
        {
          path:"/rank/bangdan1/:type",
          component:Update,
          meta:{
            showHead:true,
            keepAlive: true
          }
        },
        {
          path:"/rank/comments/:type",
          component:HotComments,
          meta:{
            showHead:true,
            keepAlive: true
          }
        }

      ],
      meta:{
        keepAlive: true
      }
    },
    {
      path:"/paySuccess",
      component:PaySuccess,
    },
    {
      path:'/library',
      component:Library,
      meta:{
        showHead:true,
        keepAlive: true
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
      path:'/reading/:bid/:cid?/:title?',
      component:Reading
    },
    {
      path:"/comments/:bid",
      component:Comments,
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
          component: HomePage,
          meta:{
            showHead:true
          },

        },
        {
          path: '/msite/collection',
          component: Collection,
          meta:{
            showHead:true
          },
        },
        {
          path: '/msite/wallet',
          component: Wallet,
          children:[
            {
              path: '/msite/wallet/expenseRcd',
              component: ExpenseRecord,
              meta:{
                showHead:true
              },
            },
            {
              path: '/msite/wallet/rechargeRcd',
              component: RechargeRecord,
              meta:{
                showHead:true
              },
            },
            {
              path: '/msite/wallet',
              redirect: "/msite/wallet/expenseRcd",
            }
          ]

        },
        {
          path: '/msite/modify',
          component: Modify,
          meta:{
            showHead:true
          },
        },
        {
          path: '',
          redirect: '/msite/homePage'
        }
      ]

    },
    {
      path:"/recharge",
      component:Recharge
    },
    {
      path:"/detail",
      component:Detail,
      children:[
        {
          path:"/detail/bookIntro/:bid",
          component:BookInfo,
          meta:{
            showHead:true
          }
        },
        {
          path:"/detail/directory/:bid",
          component:Directory,
          meta:{
            showHead:true
          }
        },
        {
          path:"",
          redirect:"/detail/bookIntro"
        }
      ]
    },
    {
      path:"/privacy",
      component:Privacy,
      meta:{
        showHead:true
      }
    },
    {
      path:"/aggreement",
      component:Aggreement,
      meta:{
        showHead:true
      }
    },
    {
      path:"/helpCenter",
      component:HelpCenter,
      meta:{
        showHead:true
      }
    }
  ]
})
