import { screen } from '@testing-library/react';
import renderWithRouter from '../../../setup/jest/utility/routes/routes';
import Hero from '../Hero';

describe('Hero', () => {
  test('expect a Hero component to be rendered', () => {
    renderWithRouter(<Hero />);

    const heroComponent = screen.getByRole('home-hero');

    expect(heroComponent).toBeInTheDocument();
  });

  test('expect the Hero component to render a h1, h1, and a image', () => {
    renderWithRouter(<Hero />);

    const heroComponentH1s = screen.getAllByRole('heading');
    const heroComponentImg = screen.getByRole('img');

    expect(heroComponentH1s).toHaveLength(2);
    expect(heroComponentImg).toBeInTheDocument();
  });
});
