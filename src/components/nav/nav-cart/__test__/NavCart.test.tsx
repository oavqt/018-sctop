import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavCart from '../NavCart';

describe('NavCart', () => {
  const renderWithRouter = (component: ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, '', route);

    return render(component, { wrapper: BrowserRouter });
  };

  test('expect a NavCart component to be rendered', () => {
    renderWithRouter(<NavCart />);

    const NavCartComponent = screen.getByRole('nav-cart');

    expect(NavCartComponent).toBeInTheDocument();
  });

  test('expect the NavCart component to have a cart link', () => {
    renderWithRouter(<NavCart />);

    const NavCartComponentLink = screen.getByRole('link');
    const NavCartComponentCart = screen.getByText('cart');

    expect(NavCartComponentLink).toBeInTheDocument();
    expect(NavCartComponentCart).toBeInTheDocument();
  });
});
