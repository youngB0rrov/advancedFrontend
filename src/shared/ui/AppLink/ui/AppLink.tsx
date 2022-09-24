/* eslint-disable react/jsx-props-no-spreading */
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/class-names/classNames';
import { FunctionComponent } from 'react';
import classes from './AppLink.module.scss';

export enum AppLinkThemes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkThemes;
}

export const AppLink: FunctionComponent<AppLinkProps> = (props) => {
  const {
    to, children, className, theme, ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames('', {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
