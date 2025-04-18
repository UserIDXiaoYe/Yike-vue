import { createWebHashHistory, createRouter } from 'vue-router'
//配置路由文件
const routes = [
    {
        path:'/',
        name:'index',
        component:() => import('../views/YiKeIndex.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router