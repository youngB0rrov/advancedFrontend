import { FunctionComponent } from 'react';
import { classNames } from 'shared/lib/class-names/classNames';
import { Loader } from 'shared/ui/Loader';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FunctionComponent<PageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(classes.PageLoader, {}, [className])}>
      <Loader
        className={classes.loaderContent}
      />
    </div>
  );
};
