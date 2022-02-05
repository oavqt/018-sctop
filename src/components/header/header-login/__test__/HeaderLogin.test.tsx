import { screen } from '@testing-library/react';
import renderWithRouter from '../../../../setup/jest/utility/routes/routes';
import HeaderLogin from '../HeaderLogin';

describe('HeaderLogin', () => {
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
