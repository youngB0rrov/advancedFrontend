import {classNames} from "shared/lib/class-names/classNames";
import {AppLink, AppLinkThemes} from "shared/ui/AppLink/ui/AppLink";
import classes from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div
            className={classNames(classes.navbar, {}, [className])}
        >
            <div className={classes.links}>
                <AppLink to={'/'}
                    className={classes.link}
                    theme={AppLinkThemes.SECONDARY}
                >
                    Главная
                </AppLink>

                <AppLink
                    to={'/about'}
                    theme={AppLinkThemes.SECONDARY}
                >
                    О нас
                </AppLink>
            </div>
        </div>
    )
}