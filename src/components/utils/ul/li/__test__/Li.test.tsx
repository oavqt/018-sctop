import { render, screen } from '@testing-library/react';
import Li from '../Li';

describe('Li', () => {
  test('expect a Li component to render', () => {
    render(<Li>Li</Li>);

    const liComponent = screen.getByRole('listitem');
    const liComponentChild = screen.getByText('Li');

    expect(liComponent).toBeInTheDocument();
    expect(liComponentChild).toBeInTheDocument();
  });
});
