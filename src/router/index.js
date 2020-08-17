import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import { getToken, sessionSave } from '../libs/util'
import config from '@/config'
import { loadMenu, formatMenu } from '@/libs/router-util'
Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})
let menus = loadMenu();
router.addRoutes(menus);
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  const token = getToken();
  if (!token) {
    debugger
    const env = process.env.VUE_APP_ENV
    window.location.href = config.ssoUrl[env]
  } else if (!store.state.user.hasGetUserMenu) {
    store.dispatch('getUserMenu').then(res => {
      if (res) {
        sessionSave('route', JSON.stringify(res))
        let menuList = formatMenu(res);
        menuList.push({
          path: '*',
          name: 'error_404',
          meta: {
            hideInMenu: true
          },
          component: () => import('@/view/error-page/404.vue')
        })
        store.commit('updateMenuList', menuList);
        router.push({ path: to.path, query: to.query })
        // next();
      }
    });
  }
  else {
    next();
  }
})

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
