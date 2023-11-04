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
        meta: {
            title: '论坛',
            isHeader: true,
        }
    }
]
