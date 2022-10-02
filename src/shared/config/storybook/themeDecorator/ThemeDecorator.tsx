import { Themes } from 'app/providers/ThemeProvider';
import { Story } from '@storybook/react';

export function ThemeDecorator(theme: Themes) {
  return function (StoryComponent: Story) {
    return (
      <div
        className={`app ${theme}`}
      >
        <StoryComponent />
      </div>
    );
  };
}
