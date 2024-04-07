import { Layout } from '@/enums/Layout'

export default [
    {
        path: '/auth',
        name: 'auth',
        component: () => import('@/views/AuthView.vue'),
        meta: {
            layout: Layout.AUTH,
            title: 'Welcome'
        }
    },
];
