import {
  fireEvent, screen,
} from '@testing-library/react';
import { renderViaTranslation } from 'shared/lib/renderViaTranslation/renderViaTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar test', () => {
  test('Sidebar render', () => {
    renderViaTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle sidebar', () => {
    renderViaTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId('toggle-handler');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
