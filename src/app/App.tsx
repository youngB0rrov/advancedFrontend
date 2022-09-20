import "./styles/index.scss";
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/class-names/classNames";
import {RouterProvider} from "app/providers/RouterProvider";

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
            <RouterProvider />
        </div>
    )
}