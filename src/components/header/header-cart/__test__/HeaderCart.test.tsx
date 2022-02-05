import { screen } from '@testing-library/react';
import renderWithRouter from '../../../../setup/jest/utility/routes/routes';
import HeaderCart from '../HeaderCart';

describe('HeaderCart', () => {
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
