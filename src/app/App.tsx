import "./styles/index.scss";
import {Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import {Suspense} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/class-names/classNames";
import { AboutPage } from "pages/about-page";
import { MainPage } from "pages/main-page";

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
                        element={<AboutPage />}
                    />
                    <Route
                        path={'/'}
                        element={<MainPage />}
                    />
                </Routes>
            </Suspense>
        </div>
    )
}