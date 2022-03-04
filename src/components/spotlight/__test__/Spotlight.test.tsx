import { render, screen } from '@testing-library/react';
import Spotlight from '../Spotlight';

describe('Spotlight', () => {
  test('expect a Spotlight component to be rendered', () => {
    render(<Spotlight />);

    const spotlightComponent = screen.getByRole('home-spotlight');

    expect(spotlightComponent).toBeInTheDocument();
  });

  test('expect a Spotlight component to be rendered with 3 articles', () => {
    render(<Spotlight />);

    const spotlightComponentArticles = screen.getAllByRole('article');

    expect(spotlightComponentArticles).toHaveLength(3);
  });
});
