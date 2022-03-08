import { screen } from '@testing-library/react';
import renderWithRouter from '../../../setup/jest/utility/routes/routes';
import Footer from '../Footer';

describe('Footer', () => {
  test('expect a Footer component to be rendered', () => {
    renderWithRouter(<Footer />);

    const footerComponent = screen.getByRole('contentinfo');

    expect(footerComponent).toBeInTheDocument();
  });

  test('expect the Footer component to be rendered with 15 links', () => {
    renderWithRouter(<Footer />);

    const footerComponent = screen.getByRole('contentinfo');
    const footerComponentLinks = screen.getAllByRole('link');

    expect(footerComponent).toBeInTheDocument();
    expect(footerComponentLinks).toHaveLength(15);
  });
});
