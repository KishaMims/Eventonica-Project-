import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Eventonica', () => {
  render(<App />);
  const linkElement = screen.getByText(/Eventonica</i);
  expect(linkElement).toBeInTheDocument();
});
