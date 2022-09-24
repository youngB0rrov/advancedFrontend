import { FunctionComponent } from 'react';
import { classNames } from 'shared/lib/class-names/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonThemes } from 'shared/ui/Button/ui/Button';

interface LocaleSwitcherProps {
    className?: string;
}

export const LocaleSwitcher: FunctionComponent<LocaleSwitcherProps> = (props) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggle}
      theme={ButtonThemes.CLEAR}
    >
      {t('Сменить язык')}
    </Button>
  );
};
