import {describe, test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import { ThemeContext } from '../context/theme/themeContext';
import Invitation from './Invitation';

describe('Invitation component', () => {
  test('renders with the correct props', () => {
    const mockContext = {
      theme: 'oscuro',
    };

    const mockProps = {
      name: 'Invitación preciosa',
      src: 'example.jpg',
    };

    render(
      <ThemeContext.Provider value={mockContext}>
        <Invitation {...mockProps} />
      </ThemeContext.Provider>
    );

    // De React Testing Library
    // https://testing-library.com/docs/queries/bytext
    expect(screen.getByText(/Invitación preciosa/i)).toBeDefined()
    // https://vitest.dev/api/

  });
});

