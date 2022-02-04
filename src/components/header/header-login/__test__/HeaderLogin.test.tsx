import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeaderLogin from '../HeaderLogin';

describe('HeaderLogin', () => {
  const renderWithRouter = (component: ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, '', route);

    return render(component, { wrapper: BrowserRouter });
  };

  test('expect a HeaderLogin component to be rendered', () => {
    renderWithRouter(<HeaderLogin />);

    const headerLoginComponent = screen.getByRole('banner-login');

    expect(headerLoginComponent).toBeInTheDocument();
  });

  test('expect the HeaderLogin component to have a login link', () => {
    renderWithRouter(<HeaderLogin />);

    const headerLoginComponentLink = screen.getByRole('link');
    const headerLoginComponentPlaceholder = screen.getByText('login');

    expect(headerLoginComponentLink).toBeInTheDocument();
    expect(headerLoginComponentPlaceholder).toBeInTheDocument();
  });
});
