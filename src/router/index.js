import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import error from '../components/common/404.vue';
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '*',
      redirect: '/error'
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: resolve => require(['components/common/wrap.vue'], resolve),
      children: [{
          path: '/',
          meta: {
            title: '首页'
          },
          component: resolve => require(['components/page/home.vue'], resolve),
        },
        {
          path: '/classify',
          meta: {
            title: '全部分类'
          },
          component: resolve => require(['components/page/classify.vue'], resolve),
        },
        {
          path: '/cart',
          meta: {
            title: '购物车'
          },
          component: resolve => require(['components/page/cart.vue'], resolve),
        },
        {
          path: '/my',
          meta: {
            title: '我的'
          },
          component: resolve => require(['components/page/my.vue'], resolve),
        },
      ]
    },
    {
      path: '/error',
      meta: {
        title: '404'
      },
      component: resolve => require(['components/common/404.vue'], resolve),
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {//判断是否有标题
    document.title = to.meta.title
  }
  store.commit('setLoading', true)
  next();
})
router.afterEach(route => {
  /* 隐藏加载中动画 */
  store.commit('setLoading', false)
});
export default router;