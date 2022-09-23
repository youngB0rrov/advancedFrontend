import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib/class-names/classNames";
import classes from "./AppLink.module.scss";
import {FunctionComponent} from "react";

export enum AppLinkThemes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkThemes;
}

export const AppLink: FunctionComponent<AppLinkProps> = (props) => {
    const { to, children, className, theme, ...otherProps } = props;

    return (
        <Link
            to={to}
            className={classNames(classes.AppLink, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}