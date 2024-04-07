import auth from '@/router/middlewares/auth';
import { Layout } from '@/enums/Layout'

export default [
    {
        path: '/',
        name: 'table',
        component: () => import('@/views/MainView.vue'),
        meta: {
            layout: Layout.MAIN,
            middleware: [auth],
        }
    },
];
