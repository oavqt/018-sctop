import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
  const renderWithRouter = (component: ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, '', route);

    return render(component, { wrapper: BrowserRouter });
  };

  test('expect the Header component to render', () => {
    renderWithRouter(<Header />);

    const headerComponent = screen.getByRole('banner');

    expect(headerComponent).toBeInTheDocument();
  });

  test('expect the HeaderLogo component to render', () => {
    renderWithRouter(<Header />);

    const headerLogoComponent = screen.getByRole('banner-logo');

    expect(headerLogoComponent).toBeInTheDocument();
  });

  test('expect the HeaderNavigation component to render', () => {
    renderWithRouter(<Header />);

    const headerNavigationComponent = screen.getByRole('navigation');

    expect(headerNavigationComponent).toBeInTheDocument();
  });

  test('expect the HeaderCart component to render', () => {
    renderWithRouter(<Header />);

    const headerCartComponent = screen.getByRole('banner-cart');

    expect(headerCartComponent).toBeInTheDocument();
  });

  test('expect the HeaderLogin component to render', () => {
    renderWithRouter(<Header />);

    const headerLoginComponent = screen.getByRole('banner-login');

    expect(headerLoginComponent).toBeInTheDocument();
  });
});
