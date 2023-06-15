import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders app title', () => {
  render(<App />);
  const h1Element = screen.getByText(/Product Builder/i);
  expect(h1Element).toBeInTheDocument();
});
