import { render, screen } from '@testing-library/react';
import Commend from '../Commend';

describe('Commend', () => {
  test('expect a Commend component to be rendered', () => {
    render(<Commend />);

    const commendComponent = screen.getByRole('home-commend');

    expect(commendComponent).toBeInTheDocument();
  });

  test('expect a Commend component to be rendered with 3 articles', () => {
    render(<Commend />);

    const commendComponent = screen.getByRole('home-commend');
    const commendComponentArticles = screen.getAllByRole('article');

    expect(commendComponent).toBeInTheDocument();
    expect(commendComponentArticles).toHaveLength(3);
  });
});
