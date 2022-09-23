import {classNames} from "shared/lib/class-names/classNames";
import {AppLink, AppLinkThemes} from "shared/ui/AppLink/ui/AppLink";
import classes from "./Navbar.module.scss";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const {t} = useTranslation();

    return (
        <div
            className={classNames(classes.navbar, {}, [className])}
        >
            <div className={classes.links}>
                <AppLink to={'/'}
                    className={classes.link}
                    theme={AppLinkThemes.SECONDARY}
                >
                    {t('Главная страница')}
                </AppLink>

                <AppLink
                    to={'/about'}
                    theme={AppLinkThemes.SECONDARY}
                >
                    {t('О нас')}
                </AppLink>
            </div>
        </div>
    )
}