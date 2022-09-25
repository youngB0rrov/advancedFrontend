import { FunctionComponent } from 'react';
import { classNames } from 'shared/lib/class-names/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/ui/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LocaleSwitcher } from 'shared/ui/LocaleSwitcher/ui/LocaleSwitcher';
import { useSidebar } from '../../lib/Sidebar/useSidebar';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FunctionComponent<SidebarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <div className={classNames(classes.Sidebar, { [classes.collapsed]: isCollapsed }, [className])}>
      <Button
        onClick={toggleSidebar}
        theme={ButtonThemes.PRIMARY}
      >
        {t('Свернуть')}
      </Button>
      <div className={
          classNames(classes.switchers, { [classes.collapsedSwitchers]: isCollapsed }, [])
}
      >
        <ThemeSwitcher
          className={classes.switcher}
        />
        <LocaleSwitcher
          className={classNames(classes.locale, { [classes.collapsedLocale]: isCollapsed }, [])}
        />
      </div>
    </div>
  );
};
