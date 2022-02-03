import { render, screen } from '@testing-library/react';
import Section from '../Section';

describe('Section', () => {
  test('expect a Section component to render', () => {
    render(<Section>section</Section>);

    const SectionComponent = screen.getByText('section');

    expect(SectionComponent).toBeInTheDocument();
  });
});
