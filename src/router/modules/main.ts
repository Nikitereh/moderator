import auth from '@/router/middlewares/auth';

export default [
    {
        path: '/',
        name: 'main',
        component: () => import('@/components/HelloWorld.vue'),
        meta: {
            middleware: [auth]
        }
    },
];
