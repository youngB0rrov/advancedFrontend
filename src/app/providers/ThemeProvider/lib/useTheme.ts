import { useContext } from 'react';
import { LOCAL_STORAGE_THEM_KEY, ThemeContext, Themes } from './ThemeContext';

interface themeResult {
    theme: Themes,
    toggleTheme: () => void;
}

export const useTheme = (): themeResult => {
  // Поулчаем то, что дает useContext
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const usedTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    localStorage.setItem(LOCAL_STORAGE_THEM_KEY, usedTheme);
    setTheme(usedTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
