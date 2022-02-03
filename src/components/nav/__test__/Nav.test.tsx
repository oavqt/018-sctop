import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../Nav';

describe('Nav', () => {
  const renderWithRouter = (component: ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, '', route);

    return render(component, { wrapper: BrowserRouter });
  };

  test('expect the Nav component to render', () => {
    renderWithRouter(<Nav />);

    const NavComponent = screen.getByRole('navigation');

    expect(NavComponent).toBeInTheDocument();
  });

  test('expect the NavLogo component to render', () => {
    renderWithRouter(<Nav />);

    const NavLogoComponent = screen.getByRole('navigation-logo');

    expect(NavLogoComponent).toBeInTheDocument();
  });

  test('expect the NavLinks component to render', () => {
    renderWithRouter(<Nav />);

    const NavLinksComponent = screen.getByRole('navigation-links');

    expect(NavLinksComponent).toBeInTheDocument();
  });
});
