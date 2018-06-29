import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LearnToday from '@/pages/learnToday'
import AccountBook from '@/pages/accountBook'
import AlreadyBuy from '@/pages/alreadyBuy'
import Own from '@/pages/own'
import ListenBook from '@/components/ReadOrListen'
import Xunzhang from '@/pages/xunzhang'
import Zhanghu from '@/pages/zhanghu'
import Xuexi from '@/pages/xuexi'
import Dianping from '@/pages/dianping'
import Login from '@/pages/login'
import Help from '@/pages/help' 
import Tuijian from '@/pages/tuijian' 
import Xiazai from '@/pages/xiazai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/learnToday',
      component: LearnToday
    },
    {
      path: '/accountBook',
      component: AccountBook
    },
    {
      path: '/alreadyBuy',
      component: AlreadyBuy
    },
    {
      path: '/own',
      component: Own
    },
    {
      path: '/listenBook/:id',
      component: ListenBook
    },
    {
      path:'/xunzhang',
      component: Xunzhang
    },
    {
      path:'/zhanghu',
      component: Zhanghu
    },
    {
      path:'/xuexi',
      component:Xuexi
    },
    {
      path:'/dianping',
      component:Dianping
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/help',
      component:Help
    },
    {
      path:'/tuijian',
      component:Tuijian
    },
    {
      path:'/xiazai',
      component:Xiazai
    }
  ]
})
