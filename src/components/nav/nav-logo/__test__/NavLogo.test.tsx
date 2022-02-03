import { render, screen } from '@testing-library/react';
import NavLogo from '../NavLogo';

describe('NavLogo', () => {
  test('expect a NavLogo component to render', () => {
    render(<NavLogo />);

    const NavLogoComponent = screen.getByRole('logo');

    expect(NavLogoComponent).toBeInTheDocument();
  });

  test('expect the NavLogo component to render an image', () => {
    render(<NavLogo />);

    const NavLogoComponentImage = screen.getByRole('img');

    expect(NavLogoComponentImage).toBeInTheDocument();
  });
});
