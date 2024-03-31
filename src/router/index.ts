import {createRouter, createWebHistory} from "vue-router";
import {routes} from "@/router/routes";
import {useAuthStore} from "@/stores/auth";
import middlewarePipeline from "@/router/middlewarePipeline";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

    if (!to.meta.middleware) {
        return next();
    }
    const middleware = to.meta.middleware;

    const context = {
        to,
        from,
        next,
        authStore,
    };

    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1),
    });
});


export default router;