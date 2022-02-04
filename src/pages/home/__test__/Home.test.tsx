import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../App';
import Home from '../Home';

describe('Home', () => {
  test('expect a Home component to be rendered', () => {
    render(<Home />);

    const homeComponent = screen.getByRole('home');

    expect(homeComponent).toBeInTheDocument();
  });

  test('expect a Hero component to be rendered', () => {
    render(<Home />);

    const heroComponent = screen.getByRole('home-hero');

    expect(heroComponent).toBeInTheDocument();
  });
});
