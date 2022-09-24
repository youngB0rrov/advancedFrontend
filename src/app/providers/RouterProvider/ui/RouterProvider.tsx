import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/router-config/RouterConfig';

export function RouterProvider() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            path={path}
            key={path}
            element={(
              <div className="main-page-wrapper">
                {element}
              </div>
                          )}
          />
        ))}
      </Routes>
    </Suspense>
  );
}
