import {FunctionComponent, useState} from "react";
import {classNames} from "shared/lib/class-names/classNames";
import classes from "./Sidebar.module.scss";
import {Button, ButtonThemes} from "shared/ui/Button/ui/Button";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FunctionComponent<SidebarProps> = (props) => {
    const { children, className } = props;

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const toggleSidebar = () => {
        setIsCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(classes.Sidebar, { [classes.collapsed]: isCollapsed }, [className])}>
            <Button
                onClick={toggleSidebar}
                theme={ButtonThemes.PRIMARY}
            >
                Свернуть
            </Button>
            <div className={classNames(classes.switchers, {}, [])}>
                <ThemeSwitcher
                    className={classes.switcher}
                />
            </div>
        </div>
    )
}