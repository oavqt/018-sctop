import { render, screen } from '@testing-library/react';
import SpotlightCard from '../SpotlightCard';

describe('SpotlightCard', () => {
  test('expect a SpotlightCard component to be rendered', () => {
    const testCard = {
      description: {
        title: '---h3',
        body: '---p'
      },
      image: [
        {
          alt: '---alt',
          src: '---src'
        }
      ],
      layout: '---'
    };

    render(<SpotlightCard {...testCard} />);

    const spotlightCardComponent = screen.getByRole('article');

    expect(spotlightCardComponent).toBeInTheDocument();
  });

  test('expect the SpotlightCard component to render with a Img, P, and H3 component', () => {
    const testCard = {
      description: {
        title: '---h3',
        body: '---p'
      },
      image: [
        {
          alt: '---alt',
          src: '---src'
        }
      ],
      layout: '---'
    };

    render(<SpotlightCard {...testCard} />);

    const spotlightCardComponent = screen.getByRole('article');
    const spotlightCardComponentImg = screen.getByRole('img');
    const spotlightCardComponentHTag = screen.getByRole('heading');
    const spotlightCardComponentP = screen.getByText(testCard.description.body);

    expect(spotlightCardComponent).toBeInTheDocument();
    expect(spotlightCardComponentImg).toBeInTheDocument();
    expect(spotlightCardComponentHTag).toBeInTheDocument();
    expect(spotlightCardComponentP).toBeInTheDocument();
  });

  test('expect the SpotlightCard component with a spotlight-multiple layout to render with the correct Img, P, and H3 component', () => {
    const testCard = {
      description: {
        title: '---h3',
        body: '---p'
      },
      image: [
        {
          alt: '---alt',
          src: '---src'
        },
        {
          alt: '---alt',
          src: '---src'
        },
        {
          alt: '---alt',
          src: '---src'
        },
        {
          alt: '---alt',
          src: '---src'
        }
      ],
      layout: 'spotlight-multiple'
    };

    render(<SpotlightCard {...testCard} />);

    const spotlightCardComponent = screen.getByRole('article');
    const spotlightCardComponentImg = screen.getAllByRole('img');
    const spotlightCardComponentHTag = screen.getByRole('heading');
    const spotlightCardComponentP = screen.getByText(testCard.description.body);

    expect(spotlightCardComponent).toBeInTheDocument();
    expect(spotlightCardComponentImg).toHaveLength(4);
    expect(spotlightCardComponentHTag).toBeInTheDocument();
    expect(spotlightCardComponentP).toBeInTheDocument();
  });
});
