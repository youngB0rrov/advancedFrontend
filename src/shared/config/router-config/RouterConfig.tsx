import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/main-page";
import {AboutPage} from "pages/about-page";

export enum AppPages {
    MAIN = 'main',
    ABOUT = 'about'
}

export const routePath: Record<AppPages, string> = {
    [AppPages.MAIN]: '/',
    [AppPages.ABOUT]: '/about'
}

export const  routeConfig: Record<AppPages, RouteProps> = {
    [AppPages.MAIN]: {
        path: routePath.main,
        element: <MainPage />,
    },
    [AppPages.ABOUT]: {
        path: routePath.about,
        element: <AboutPage />
    }
}
