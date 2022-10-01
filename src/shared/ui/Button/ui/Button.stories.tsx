import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Button, ButtonThemes } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: 'Text',
  theme: ButtonThemes.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)];
PrimaryDark.args = {
  children: 'Text',
  theme: ButtonThemes.PRIMARY,
};

export const ClearLight = Template.bind({});
ClearLight.args = {
  children: 'Text',
  theme: ButtonThemes.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.decorators = [ThemeDecorator(Themes.DARK)];
ClearDark.args = {
  children: 'Text',
  theme: ButtonThemes.CLEAR,
};
