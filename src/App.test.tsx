import {describe, test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

describe('Init', () => {
  test('Load page', () => {
    render( <BrowserRouter><App /></BrowserRouter>);
    //expect(linkElement).toBeInTheDocument();
    expect(screen.getByText(/Invitaciones/i)).toBeDefined()
  })
});


