import type { NavigationGuardNext, RouteLocationNormalized, RouteLocationRaw } from 'vue-router';
import type { StateTree } from 'pinia';

export interface Context {
    to: RouteLocationNormalized;
    from: RouteLocationNormalized;
    next: NavigationGuardNext;
    authStore: StateTree;
}

export type MiddlewareReturnValue = boolean | void | RouteLocationRaw;

export type Middleware = (context: Context) =>
    MiddlewareReturnValue | Promise<MiddlewareReturnValue>;

declare module 'vue-router' {
    interface RouteMeta {
        layout?: string;
        middleware?: Middleware[]
        title?: string;
        subtitle?: string,
        name?: string
    }
}
