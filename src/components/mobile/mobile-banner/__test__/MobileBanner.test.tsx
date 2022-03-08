import { render, screen } from '@testing-library/react';
import MobileBanner from '../MobileBanner';

describe('MobileBanner', () => {
  test('expect a MobileBanner component to be rendered', () => {
    render(<MobileBanner />);

    const mobileBannerComponent = screen.getByRole('home-mobile-banner');

    expect(mobileBannerComponent).toBeInTheDocument();
  });

  test('expect the MobileBanner component to be rendered with H2, P, and 2 Img components', () => {
    render(<MobileBanner />);

    const mobileBannerComponent = screen.getByRole('home-mobile-banner');
    const mobileBannerComponentHeading = screen.getByRole('heading');
    const mobileBannerComponentBody = screen.getByText(
      "le vt'que, veatae, quibusdam, suscipit fugit sit alias corrupti et velit quae laboriosam sapiente doloribus quam possimus magni itaque, aut debitis."
    );
    const mobileBannerComponentImages = screen.getAllByRole('img');

    expect(mobileBannerComponent).toBeInTheDocument();
    expect(mobileBannerComponentHeading).toBeInTheDocument();
    expect(mobileBannerComponentBody).toBeInTheDocument();
    expect(mobileBannerComponentImages).toHaveLength(2);
  });
});
