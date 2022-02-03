import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavNavigation from '../NavNavigation';

describe('NavNavigation', () => {
  const renderWithRouter = (component: ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, '', route);

    return render(component, { wrapper: BrowserRouter });
  };

  test('expect a NavNavigation component to be rendered', () => {
    renderWithRouter(<NavNavigation />);

    const NavNavigationComponent = screen.getByRole('nav-navigation');

    expect(NavNavigationComponent).toBeInTheDocument();
  });

  test('expect the NavNavigation component to have the home, products, about, and contact navigation links', () => {
    renderWithRouter(<NavNavigation />);

    const NavNavigationComponentLink = screen.getAllByRole('link');
    const NavNavigationComponentHome = screen.getByText('home');
    const NavNavigationComponentProducts = screen.getByText('products');
    const NavNavigationComponentAbout = screen.getByText('about');
    const NavNavigationComponentContact = screen.getByText('contact');

    expect(NavNavigationComponentLink).toHaveLength(4);
    expect(NavNavigationComponentHome).toBeInTheDocument();
    expect(NavNavigationComponentProducts).toBeInTheDocument();
    expect(NavNavigationComponentAbout).toBeInTheDocument();
    expect(NavNavigationComponentContact).toBeInTheDocument();
  });
});
