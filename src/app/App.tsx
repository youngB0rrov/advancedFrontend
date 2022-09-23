import "./styles/index.scss";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/class-names/classNames";
import {RouterProvider} from "app/providers/RouterProvider";
import {Navbar} from "widgets/navbar";
import {Sidebar} from "widgets/Sidebar";

export const App = () => {
    const {theme} = useTheme();

    return (
        <div
            className={classNames('app', {hovered: true, selected: false}, [theme])}
        >
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <RouterProvider/>
            </div>
        </div>
    )
}