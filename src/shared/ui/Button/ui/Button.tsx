/* eslint-disable react/jsx-props-no-spreading */
import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { classNames } from 'shared/lib/class-names/classNames';
import classes from './Button.module.scss';

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
      type="button"
      className={classNames(classes.Button, {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
