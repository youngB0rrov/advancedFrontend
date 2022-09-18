import {Counter} from "./components/counter/Counter";
import "./index.scss";
import {Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import {AboutPageAsync} from "./pages/about-page/AboutPage.async";
import {MainPageAsync} from "./pages/main-page/MainPage.async";
import {Suspense} from "react";

export const App = () => {
    return (
        <div
            className={'app'}
        >
            <Link to={'/'}>
                Главная
            </Link>
            <Link to={'/about'}>
                О нас
            </Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route
                        path={'/about'}
                        element={<AboutPageAsync/>}
                    />
                    <Route
                        path={'/'}
                        element={<MainPageAsync/>}
                    />
                </Routes>
            </Suspense>
        </div>
    )
}