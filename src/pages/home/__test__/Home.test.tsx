import { screen } from '@testing-library/react';
import renderWithRouter from '../../../setup/jest/utility/routes/routes';
import Home from '../Home';

describe('Home', () => {
  test('expect a Home component to be rendered', () => {
    renderWithRouter(<Home />);

    const homeComponent = screen.getByRole('home');

    expect(homeComponent).toBeInTheDocument();
  });

  test('expect a Hero component to be rendered', () => {
    renderWithRouter(<Home />);

    const heroComponent = screen.getByRole('home-hero');

    expect(heroComponent).toBeInTheDocument();
  });

  test('expect a KeyInfo component to be rendered', () => {
    renderWithRouter(<Home />);

    const heroComponent = screen.getByRole('home-keyinfo');

    expect(heroComponent).toBeInTheDocument();
  });
});
