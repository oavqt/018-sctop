import { render, screen } from '@testing-library/react';
import Nav from '../Nav';

describe('Nav', () => {
  test('expect the Nav component to render', () => {
    render(<Nav />);

    const NavComponent = screen.getByRole('navigation');

    expect(NavComponent).toBeInTheDocument();
  });

  test('expect the NavLogo component to render', () => {
    render(<Nav />);

    const NavLogoComponent = screen.getByRole('logo');

    expect(NavLogoComponent).toBeInTheDocument();
  });
});
