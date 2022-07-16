import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('Case 1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
