import { render, screen } from '@testing-library/react';
import KeyInfo from '../KeyInfo';

describe('KeyInfo', () => {
  test('expect a KeyInfo component to be rendered', () => {
    render(<KeyInfo />);

    const keyInfoComponent = screen.getByRole('home-keyinfo');

    expect(keyInfoComponent).toBeInTheDocument();
  });
});
