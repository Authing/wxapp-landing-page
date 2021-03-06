import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/index'
//import settingsPage from '@/components/settings'
import MuseUI from 'muse-ui';
//import Message from 'muse-ui-message';
import '../../muse-ui.css';
import '../../styles.css';
//import '../../muse-ui-message.css';
Vue.use(Router)
Vue.use(MuseUI)
//Vue.use(Message)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/components/index')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('@/components/settings')
    }
  ],
  mode: 'history',
})
