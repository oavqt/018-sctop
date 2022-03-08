import { screen } from '@testing-library/react';
import renderWithRouter from '../../../setup/jest/utility/routes/routes';
import Spotlight from '../Spotlight';

describe('Spotlight', () => {
  test('expect a Spotlight component to be rendered', () => {
    renderWithRouter(<Spotlight />);

    const spotlightComponent = screen.getByRole('home-spotlight');

    expect(spotlightComponent).toBeInTheDocument();
  });

  test('expect a Spotlight component to be rendered with 3 articles', () => {
    renderWithRouter(<Spotlight />);

    const spotlightComponentArticles = screen.getAllByRole('article');

    expect(spotlightComponentArticles).toHaveLength(3);
  });
});
