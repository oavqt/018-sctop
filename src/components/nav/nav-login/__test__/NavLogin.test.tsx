import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavLogin from '../NavLogin';

describe('NavLogin', () => {
  const renderWithRouter = (component: ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, '', route);

    return render(component, { wrapper: BrowserRouter });
  };

  test('expect a NavLogin component to be rendered', () => {
    renderWithRouter(<NavLogin />);

    const NavLoginComponent = screen.getByRole('nav-login');

    expect(NavLoginComponent).toBeInTheDocument();
  });

  test('expect the NavLogin component to have a placeholder link', () => {
    renderWithRouter(<NavLogin />);

    const NavLoginComponentLink = screen.getByRole('link');
    const NavLoginComponentPlaceholder = screen.getByText('login');

    expect(NavLoginComponentLink).toBeInTheDocument();
    expect(NavLoginComponentPlaceholder).toBeInTheDocument();
  });
});
