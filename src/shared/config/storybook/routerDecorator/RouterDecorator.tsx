import { Story } from '@storybook/react';
import {BrowserRouter} from "react-router-dom";

export function routerDecorator(story: () => Story) {
  return (
    <BrowserRouter>
      {story()}
    </BrowserRouter>
  )
}
