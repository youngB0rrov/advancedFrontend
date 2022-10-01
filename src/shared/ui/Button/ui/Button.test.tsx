import { render, screen } from '@testing-library/react';
import { Button, ButtonThemes } from 'shared/ui/Button/ui/Button';
import { debug } from 'util';

describe('Button tests', () => {
  test('Button render test', () => {
    render(<Button>Click</Button>);
    expect(screen.getByText('Click')).toBeInTheDocument();
  });

  test('Button has theme class clear', () => {
    render(<Button theme={ButtonThemes.CLEAR}>Click</Button>);
    expect(screen.getByText('Click')).toHaveClass('clear');
    screen.debug();
  });
});
