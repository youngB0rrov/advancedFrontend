import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { LocaleSwitcher } from './LocaleSwitcher';

export default {
  title: 'shared/LocaleSwitcher',
  component: LocaleSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LocaleSwitcher>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof LocaleSwitcher> = (args) => <LocaleSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Themes.DARK)];
Dark.args = {};
