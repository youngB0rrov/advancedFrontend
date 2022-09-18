import {useContext, useState} from "react";
import "./styles/index.scss";
import {Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import {AboutPageAsync} from "./pages/about-page/AboutPage.async";
import {MainPageAsync} from "./pages/main-page/MainPage.async";
import {Suspense} from "react";
import {ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/class-names/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div
            className={classNames('app', {hovered: true, selected: false}, [theme])}
        >
            <Link to={'/'}>
                Главная
            </Link>
            <Link to={'/about'}>
                О нас
            </Link>

            <button
                onClick={toggleTheme}
            >
                Сменить тему
            </button>

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