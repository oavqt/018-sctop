import { render, screen } from '@testing-library/react';
import HeaderLogo from '../HeaderLogo';

describe('HeaderLogo', () => {
  test('expect a HeaderLogo component to render', () => {
    render(<HeaderLogo />);

    const headerLogoComponent = screen.getByRole('banner-logo');

    expect(headerLogoComponent).toBeInTheDocument();
  });

  test('expect the HeaderLogo component to render an image', () => {
    render(<HeaderLogo />);

    const headerLogoComponentImage = screen.getByRole('img');

    expect(headerLogoComponentImage).toBeInTheDocument();
  });
});
