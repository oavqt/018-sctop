import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeaderCart from '../HeaderCart';

describe('HeaderCart', () => {
  const renderWithRouter = (component: ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, '', route);

    return render(component, { wrapper: BrowserRouter });
  };

  test('expect a HeaderCart component to be rendered', () => {
    renderWithRouter(<HeaderCart />);

    const headerCartComponent = screen.getByRole('banner-cart');

    expect(headerCartComponent).toBeInTheDocument();
  });

  test('expect the HeaderCart component to have a cart link', () => {
    renderWithRouter(<HeaderCart />);

    const headerCartComponentLink = screen.getByRole('link');
    const headerCartComponentCart = screen.getByText('cart');

    expect(headerCartComponentLink).toBeInTheDocument();
    expect(headerCartComponentCart).toBeInTheDocument();
  });
});
