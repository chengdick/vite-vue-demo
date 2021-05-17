import { createRouter, createWebHistory, Router } from 'vue-router'
import BasicLayout from '@/components/layouts/BasicLayout.vue'
import BlankLayout from '@/components/layouts/BlankLayout.vue'
export const routes = [
  {
    path: '/',
    component: BasicLayout,
    redirect: '/workbench',
    children: [
      {
        path: '/workbench',
        name: 'workbench',
        meta: {
          icon: '',
          resourceCode: '',
          // hidden: true,
          // parentPath: '/',
          title: '工作台',
          openKeys: ['workbench'],
        },
        component: () =>
          import(
            /* webpackChunkName: 'workbench' */ '@/views/workbench/index.vue'
          ),
      },
      {
        path: '/table',
        name: 'table',
        component: BlankLayout,
        meta: {
          icon: '',
          resourceCode: '',
          title: '表格',

          // hidden: true,
          // parentPath: '/',
        },
        redirect: '/table/children',
        children: [
          {
            path: '/table/children',
            name: 'tableChildren',
            component: BlankLayout,
            redirect: '/table/children/children',
            meta: {
              icon: '',
              resourceCode: '',
              // hidden: true,
              // parentPath: '/',
              title: '表格子',
            },

            children: [
              {
                path: '/table/children/children',
                name: 'tableChildrenChildren',
                meta: {
                  icon: '',
                  resourceCode: '',
                  // hidden: true,
                  // parentPath: '/',
                  title: '表格子子',
                  openKeys: ['table', 'tableChildren'],
                },
                component: () =>
                  import(
                    /* webpackChunkName: 'workbench' */ '@/views/table/children.vue'
                  ),
              },
            ],
          },
        ],
      },
    ],
  },
]
const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
} as any)
router.beforeEach((to: any, from: any, next: any) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
/* 路由异常错误处理，尝试解析一个异步组件时发生错误，重新渲染目标页面 */
router.onError((error: any) => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  const targetPath: any = router.options.history.state.current
  if (isChunkLoadFailed) {
    router.replace(targetPath)
  }
})
