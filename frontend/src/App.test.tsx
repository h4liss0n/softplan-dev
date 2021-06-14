import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('it render app sucessfull', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello!/i);
  expect(linkElement).toBeInTheDocument();
});
