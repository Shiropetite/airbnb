import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        components: {
          header: () => import('src/components/headers/HomeHeader.vue'),
          default: () => import('src/pages/Home.vue')
        }
      },
      {
        path: 's/experiences/online',
        name: 'online-experiences',
        components: {
          header: () => import('src/components/headers/HomeHeader.vue'),
          default: () => import('src/pages/ComingSoon.vue')
        }
      },
      {
        path: 'host/homes',
        name: 'host',
        components: {
          header: () => import('src/components/headers/HomeHeader.vue'),
          default: () => import('src/pages/ComingSoon.vue')
        }
      },
      {
        path: 'host/experiences?from_nav=1',
        name: 'host-experience',
        components: {
          header: () => import('src/components/headers/HomeHeader.vue'),
          default: () => import('src/pages/ComingSoon.vue')
        }
      },
       {
        path: 'help',
        name: 'help',
        components: {
          header: () => import('src/components/headers/HomeHeader.vue'),
          default: () => import('src/pages/ComingSoon.vue')
        }
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
