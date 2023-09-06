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
      },
      {
         path: '/case/breadth-first-search',
         name: 'BreadthFirstSearch',
         component: () => import('../views/BreadthFirstSearch.vue')
      },
      {
         path: '/case/maze-gen',
         name: 'MazeGen',
         component: () => import('../views/MazeGen.vue')
      },
      {
         path: '/case/lexicographic-order',
         name: 'LexicographicOrder',
         component: () => import('../views/LexicographicOrder.vue')
      },
      {
         path: '/case/multiperceptron',
         name: 'Multiperceptron',
         component: () => import('../views/Multiperceptron.vue')
      }
   ],
   scrollBehavior (to, from, savedPosition) {
      return { top: 0 }
   }
})

export default router
