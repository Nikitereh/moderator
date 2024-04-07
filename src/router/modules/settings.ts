import { Layout } from '@/enums/Layout'

export default [
    {
        path: '/settings',
        name: 'settings',
        component: () => import('@/views/SettingsView.vue'),
        meta: {
            layout: Layout.MAIN,
            title: 'Settings'
        }
    },
];
