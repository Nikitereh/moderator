import auth from "@/router/modules/auth";
import main from "@/router/modules/main";
import settings from "@/router/modules/settings";

export const routes = [
    ...auth,
    ...main,
    ...settings,
]