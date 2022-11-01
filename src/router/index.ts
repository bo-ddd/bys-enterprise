import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: ()=> import('@/views/layout.vue'),
      children:[
        {
          path: '/position',
          name: 'Position',
          component: () => import('@/views/positionAdmin/Position.vue')
        },

        {
          path: '/positionInfo',
          name: 'PositionInfo',
          component: () => import('@/views/positionAdmin/PositionInfo.vue')
        },
        {
          path: '/memberCenter',
          name: 'MemberCenter',
          component: () => import('@/views/memberCenter/MemberCenter.vue')
        },

        {
          path: '/findPersonnel',
          name: 'findPersonnel',
          component: () => import('@/views/findPersonnel/Personnel.vue')
        },

        {
          path: '/resume',
          name: 'Resume',
          component: () => import('@/views/resumeAdmin/Resume.vue')
        },

        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/home/Home.vue')
        },
      ]
    },
    
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})

export default router;
