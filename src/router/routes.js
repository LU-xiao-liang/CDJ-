export default [

    {
        // 首页
        path: '/',
        component: () => import('../views/Home'),
        meta: {
            title: '首页',
            isHeader: true,
        }
    },
    {
        path: '/login',
        component: () => import('../views/Login'),
        meta: {
            title: '登录',
            isHeader: true,
        }
    },
    {
        path: '/register',
        component: () => import('../views/Register'),
        meta: {
            title: '注册',
            isHeader: false,
        }
    },
    {
        // 论坛主页
        path: '/forum',
        component: () => import('../views/Forum'),
        children:[
            {
                path:'/',
                component: () => import('../views/Forum/Center'),
                meta:{
                    title: '论坛',
                    isHeader: true,
                }
            },
            {
                path:'create',
                component: () => import('../views/Forum/Create'),
                meta:{
                    title: '发帖',
                    isHeader: true,
                }
            },
            {
                path:'essayshow',
                component: () => import('../views/Forum/EssayShow'),
                meta:{
                    title: '内容',
                    isHeader: true,
                }
            }
        ]
    }
]
