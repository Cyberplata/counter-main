import React from 'react';
import {render, screen} from '@testing-library/react';
import AppWithReducer from "./AppWithReducer";

test('renders learn react link', () => {
  render(<AppWithReducer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
