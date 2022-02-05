import { screen } from '@testing-library/react';
import renderWithRouter from '../../../../setup/jest/utility/routes/routes';
import HeaderLogo from '../HeaderLogo';

describe('HeaderLogo', () => {
  test('expect a HeaderLogo component to render', () => {
    renderWithRouter(<HeaderLogo />);

    const headerLogoComponent = screen.getByRole('banner-logo');

    expect(headerLogoComponent).toBeInTheDocument();
  });

  test('expect the HeaderLogo component to render an image', () => {
    renderWithRouter(<HeaderLogo />);

    const headerLogoComponentImage = screen.getByRole('img');

    expect(headerLogoComponentImage).toBeInTheDocument();
  });
});
