import { render, screen } from '@testing-library/react';
import CommendCard from '../CommendCard';

describe('CommendCard', () => {
  const testCard = {
    author: {
      name: '--h3',
      title: '--p'
    },
    description: {
      body: '---p'
    },
    image: {
      alt: '---alt',
      src: '---src'
    }
  };

  test('expect a CommendCard component to be rendered', () => {
    render(<CommendCard {...testCard} />);

    const commendCardComponent = screen.getByRole('article');

    expect(commendCardComponent).toBeInTheDocument();
  });

  test('expect the CommendCard component to be rendered with a Img, P, HTag, and P components', () => {
    render(<CommendCard {...testCard} />);

    const commendCardComponent = screen.getByRole('article');
    const commendCardComponentBody = screen.getByText(
      testCard.description.body
    );
    const commendCardComponentHeading = screen.getByRole('heading');
    const commendCardComponentTitle = screen.getByText(testCard.author.title);
    const commendCardComponentImg = screen.getByRole('img');

    expect(commendCardComponent).toBeInTheDocument();
    expect(commendCardComponentBody).toBeInTheDocument();
    expect(commendCardComponentHeading).toBeInTheDocument();
    expect(commendCardComponentTitle).toBeInTheDocument();
    expect(commendCardComponentImg).toBeInTheDocument();
  });
});
