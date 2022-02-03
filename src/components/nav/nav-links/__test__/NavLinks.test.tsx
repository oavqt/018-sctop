import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavLinks from '../NavLinks';

describe('NavLinks', () => {
  const renderWithRouter = (component: ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, '', route);

    return render(component, { wrapper: BrowserRouter });
  };

  test('expect a NavLinks component to be rendered', () => {
    renderWithRouter(<NavLinks />);

    const NavLinksComponent = screen.getByRole('navigation-links');

    expect(NavLinksComponent).toBeInTheDocument();
  });

  test('expect the NavLinks component to have the Home, Products, About, and Contact navigation links', () => {
    renderWithRouter(<NavLinks />);

    const NavLinksComponent = screen.getAllByRole('link');

    expect(NavLinksComponent).toHaveLength(4);

    const NavLinksComponentHome = screen.getByText('Home');
    const NavLinksComponentProducts = screen.getByText('Products');
    const NavLinksComponentAbout = screen.getByText('About');
    const NavLinksComponentContact = screen.getByText('Contact');

    expect(NavLinksComponentHome).toBeInTheDocument();
    expect(NavLinksComponentProducts).toBeInTheDocument();
    expect(NavLinksComponentAbout).toBeInTheDocument();
    expect(NavLinksComponentContact).toBeInTheDocument();
  });
});
