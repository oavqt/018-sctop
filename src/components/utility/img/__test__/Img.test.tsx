import { render, screen } from '@testing-library/react';
import Img from '../Img';

describe('Img', () => {
  test('expect a Img component to render', () => {
    render(<Img attrs={{ alt: 'alt', src: 'src' }} />);

    const imgComponent = screen.getByRole('img');

    expect(imgComponent).toBeInTheDocument();

    expect(imgComponent).toHaveAttribute('alt', 'alt');
    expect(imgComponent).toHaveAttribute('src', 'src');
  });
});
