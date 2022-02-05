import { screen } from '@testing-library/react';
import renderWithRouter from '../../../../setup/jest/utility/routes/routes';
import HeaderNavigation from '../HeaderNavigation';

describe('HeaderNavigation', () => {
  test('expect a HeaderNavigation component to be rendered', () => {
    renderWithRouter(<HeaderNavigation />);

    const headerNavigationComponent = screen.getByRole('navigation');

    expect(headerNavigationComponent).toBeInTheDocument();
  });

  test('expect the HeaderNavigation component to have the home, products, about, and contact navigation links', () => {
    renderWithRouter(<HeaderNavigation />);

    const headerNavigationComponentLink = screen.getAllByRole('link');
    const headerNavigationComponentHome = screen.getByText('home');
    const headerNavigationComponentProducts = screen.getByText('products');
    const headerNavigationComponentAbout = screen.getByText('about');
    const headerNavigationComponentContact = screen.getByText('contact');

    expect(headerNavigationComponentLink).toHaveLength(4);
    expect(headerNavigationComponentHome).toBeInTheDocument();
    expect(headerNavigationComponentProducts).toBeInTheDocument();
    expect(headerNavigationComponentAbout).toBeInTheDocument();
    expect(headerNavigationComponentContact).toBeInTheDocument();
  });
});
