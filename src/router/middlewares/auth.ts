import {Context} from "@/router/types";

export default function auth({ next, authStore }: Context) {
    if (!authStore.isLoggedIn) {
        return next({ name: 'auth' });
    }
    return next();
}
