import auth from '@/router/middlewares/auth';
import { Layout } from '@/enums/Layout'

export default [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/MainView.vue'),
        meta: {
            layout: Layout.MAIN,
            middleware: [auth],
        }
    },
];
