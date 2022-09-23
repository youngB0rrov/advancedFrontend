import {classNames} from "shared/lib/class-names/classNames";
import classes from "./ThemeSwitcher.module.scss";
import {FunctionComponent} from "react";
import {Themes, useTheme} from "app/providers/ThemeProvider";
import LightThemeIcon from "shared/assets/icons/theme-light.svg";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg";
import {Button, ButtonThemes} from "shared/ui/Button/ui/Button";

export enum ThemeSwitcherThemes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface ThemeSwitcherProps {
    className?: string;
    theme?: ThemeSwitcherThemes;
}

export const ThemeSwitcher: FunctionComponent<ThemeSwitcherProps> = (props) => {
    const {children, className} = props;
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(classes.switcher, {}, [className])}
            theme={ButtonThemes.PRIMARY}
        >
            <span
                className={classes.text}
            >
                {children}
            </span>
            {theme === Themes.DARK
                ?
                <DarkThemeIcon/>
                :
                <LightThemeIcon/>
            }
        </Button>
    )
}