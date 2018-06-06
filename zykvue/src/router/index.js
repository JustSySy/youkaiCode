import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home/Home'
import Video from '@/components/Video/Video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video
    }
  ]
})
