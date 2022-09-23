import {ButtonHTMLAttributes, FunctionComponent} from "react";
import classes from "./Button.module.scss";

import {classNames} from "shared/lib/class-names/classNames";

export enum ButtonThemes {
    CLEAR = 'clear',
    PRIMARY = 'primary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonThemes,
    className?: string;
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(classes.Button, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}