import "./styles/index.scss";
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/class-names/classNames";
import {RouterProvider} from "app/providers/RouterProvider";
import {Navbar} from "widgets/navbar";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div
            className={classNames('app', {hovered: true, selected: false}, [theme])}
        >
            <Navbar />
            <button
                onClick={toggleTheme}
            >
                Сменить тему
            </button>
            <RouterProvider/>
        </div>
    )
}