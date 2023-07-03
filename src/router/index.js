import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/:pathMatch(.*)',
         redirect: { name: 'Home' }
      },
      {
         path: '/',
         name: 'Home',
         component: () => import('../views/HomeView.vue')
      },
      {
         path: '/case/binary-tree',
         name: 'BinaryTree',
         component: () => import('../views/BinaryTree.vue')
      }
   ],
   scrollBehavior (to, from, savedPosition) {
      return { top: 0 }
   }
})

export default router
