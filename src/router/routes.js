import Home from '../pages/Home/Home.vue'//首页
import Classify from '../pages/Classify/Classify.vue'//分类
import Personage from '../pages/Personage/Personage.vue'//个人中心
import Shopping from '../pages/Shopping/Shopping.vue'//值得买
import Buying from '../pages/Buying/Buying.vue'//购物车
export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter:true
    }
  },
  {
    path: '/classify',
    component: Classify,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/personage',
    component: Personage,
    meta: {
      isShowFooter: false
    }
  },
  {
    path: '/shopping',
    component: Shopping,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/buying',
    component: Buying,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/',
    redirect:'/personage'
  }
]