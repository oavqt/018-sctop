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

  test('expect a Spotlight component to be rendered', () => {
    renderWithRouter(<Home />);

    const spotlightComponent = screen.getByRole('home-spotlight');

    expect(spotlightComponent).toBeInTheDocument();
  });

  test('expect a Commend component to be rendered', () => {
    renderWithRouter(<Home />);

    const spotlightComponent = screen.getByRole('home-commend');

    expect(spotlightComponent).toBeInTheDocument();
  });
});
