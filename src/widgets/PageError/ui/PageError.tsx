import { FunctionComponent } from 'react';
import { classNames } from 'shared/lib/class-names/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonThemes } from 'shared/ui/Button/ui/Button';
import classes from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FunctionComponent<PageErrorProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('errorBoundary');

  const handleReload = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(classes.PageError, {}, [className])}>
      {t('Произошла ошибка')}
      <Button
        className={classes.reload}
        theme={ButtonThemes.CLEAR}
        onClick={handleReload}
      >
        {t('Перезагрузить станицу')}
      </Button>
    </div>
  );
};
