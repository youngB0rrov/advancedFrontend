import { createContext } from 'react';

export enum Themes {
    LIGHT = 'light',
    DARK = 'dark'
}

export const LOCAL_STORAGE_THEM_KEY = 'theme';

export interface ThemeContextProps {
    theme?: Themes;
    setTheme?: (theme: Themes) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({

});
