import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  test('expect a Hero component to be rendered', () => {
    render(<Hero />);

    const heroComponent = screen.getByRole('home-hero');

    expect(heroComponent).toBeInTheDocument();
  });

  test('expect the Hero component to render a h1 and a image', () => {
    render(<Hero />);

    const heroComponentH1 = screen.getByRole('heading');
    const heroComponentImg = screen.getByRole('img');

    expect(heroComponentH1).toBeInTheDocument();
    expect(heroComponentImg).toBeInTheDocument();
  });
});