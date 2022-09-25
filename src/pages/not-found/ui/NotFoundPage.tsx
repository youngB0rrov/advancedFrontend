import { FunctionComponent } from 'react';
import { classNames } from 'shared/lib/class-names/classNames';
import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FunctionComponent<NotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.NotFoundPage, {}, [className])}>
      <div className={classes.NotFoundContent}>
        {t('Страница не найдена')}
      </div>
    </div>
  );
};
