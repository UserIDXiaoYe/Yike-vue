import { createWebHashHistory, createRouter } from 'vue-router'
//配置路由文件
const routes = [
    {
        path:'/',
        redirect:'/wall',
        name:'index',
        component:() => import('../views/YiKeIndex.vue'),
        children:[
            {
                path:'wall',
                component:() => import('../views/WallMessage.vue')
            }
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router