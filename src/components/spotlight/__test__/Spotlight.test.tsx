import { render, screen } from '@testing-library/react';
import Spotlight from '../Spotlight';

describe('Spotlight', () => {
  test('expect a Spotlight component to be rendered', () => {
    render(<Spotlight />);

    const spotlightComponent = screen.getByRole('home-spotlight');

    expect(spotlightComponent).toBeInTheDocument();
  });
});
