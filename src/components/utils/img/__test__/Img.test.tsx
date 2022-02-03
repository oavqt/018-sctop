import { render, screen } from '@testing-library/react';
import Img from '../Img';

describe('Img', () => {
  test('expect a Img component to render', () => {
    render(<Img attrs={{ alt: 'alt', src: 'src' }} />);

    const ImgComponent = screen.getByRole('img');

    expect(ImgComponent).toBeInTheDocument();

    expect(ImgComponent).toHaveAttribute('alt', 'alt');
    expect(ImgComponent).toHaveAttribute('src', 'src');
  });
});
