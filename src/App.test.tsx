import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche Schedulapp', () => {
  render(<App />);
  const elements = screen.getAllByText(/Schedul/i);
  expect(elements.length).toBeGreaterThan(0);
});
