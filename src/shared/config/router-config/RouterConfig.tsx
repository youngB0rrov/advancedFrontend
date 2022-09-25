import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { NotFoundPage } from 'pages/not-found';

export enum AppPages {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound'
}

export const routePath: Record<AppPages, string> = {
  [AppPages.MAIN]: '/',
  [AppPages.ABOUT]: '/about',
  [AppPages.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppPages, RouteProps> = {
  [AppPages.MAIN]: {
    path: routePath.main,
    element: <MainPage />,
  },
  [AppPages.ABOUT]: {
    path: routePath.about,
    element: <AboutPage />,
  },
  [AppPages.NOT_FOUND]: {
    path: routePath.notFound,
    element: <NotFoundPage />,
  },
};
