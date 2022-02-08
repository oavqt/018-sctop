import { render, screen } from '@testing-library/react';
import KeyInfoCard from '../KeyInfoCard';

describe('KeyInfoCard', () => {
  test('expect a KeyInfoCard component to render', () => {
    const testCard = {
      description: {
        title: '---h3',
        body: '---p'
      },
      image: {
        alt: '---alt',
        src: '---src'
      },
      layout: '---'
    };

    render(<KeyInfoCard {...testCard} />);

    const keyInfoCardComponent = screen.getByRole('article');

    expect(keyInfoCardComponent).toBeInTheDocument();
  });

  test('expect the KeyInfoCard component to render with a Img, P, and H3 component', () => {
    const testCard = {
      description: {
        title: '---h3',
        body: '---p'
      },
      image: {
        alt: '---alt',
        src: '---src'
      },
      layout: '---'
    };

    render(<KeyInfoCard {...testCard} />);

    const keyInfoCardComponent = screen.getByRole('article');
    const keyInfoCardComponentImg = screen.getByRole('img');
    const keyInfoCardComponentHTag = screen.getByRole('heading');
    const keyInfoCardComponentP = screen.getByText(testCard.description.body);

    expect(keyInfoCardComponent).toBeInTheDocument();
    expect(keyInfoCardComponentImg).toBeInTheDocument();
    expect(keyInfoCardComponentHTag).toBeInTheDocument();
    expect(keyInfoCardComponentP).toBeInTheDocument();
  });
});
