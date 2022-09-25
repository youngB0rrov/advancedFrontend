import { FunctionComponent } from 'react';
import { classNames } from 'shared/lib/class-names/classNames';
import { useTranslation } from 'react-i18next';
import classes from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: FunctionComponent<LoaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames('', {}, [className])}>
      <div className={classes.loadingText}>
        {t('Загрузка')}
      </div>
    </div>
  );
};
