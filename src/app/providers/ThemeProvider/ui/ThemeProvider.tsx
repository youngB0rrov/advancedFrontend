import { FunctionComponent, useState, useMemo } from 'react';
import { LOCAL_STORAGE_THEM_KEY, ThemeContext, Themes } from '../lib/ThemeContext';

// Пытаемя достать тему из localStorage. Если тема не установлена -- делаем тему светлой
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEM_KEY) as Themes || Themes.LIGHT;

export const ThemeProvider: FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(defaultTheme);

  // При перерендиривании компонента, ссылка на него меняется
  // Поэтому используем useMemo, чтобы пересоздавать объект только тогда
  // когда меняется поле theme в объекте
  const defaultThemeContext = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultThemeContext}>
      {children}
    </ThemeContext.Provider>
  );
};
