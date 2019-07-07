import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/index'
import MuseUI from 'muse-ui';
import '../../muse-ui.css';
import '../../styles.css';

Vue.use(Router)
Vue.use(MuseUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: indexPage
    }
  ]
})
