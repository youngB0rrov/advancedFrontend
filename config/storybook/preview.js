import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/styleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/themeDecorator/ThemeDecorator';
import { Themes } from '../../src/app/providers/ThemeProvider';
import { routerDecorator } from '../../src/shared/config/storybook/routerDecorator/RouterDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Themes.LIGHT));
addDecorator(routerDecorator);
