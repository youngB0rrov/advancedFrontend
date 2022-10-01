import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/class-names/classNames';
import { RouterProvider } from 'app/providers/RouterProvider';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/Sidebar';
import {Suspense, useEffect} from 'react';

export function App() {
  const { theme } = useTheme();

  return (
    <div
      className={classNames('app', { hovered: true, selected: false }, [theme])}
    >
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <RouterProvider />
        </div>
      </Suspense>
    </div>
  );
}
