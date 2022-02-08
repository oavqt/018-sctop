import { render, screen } from '@testing-library/react';
import P from '../P';

describe('P', () => {
  test('expect a P component to render', () => {
    render(<P>p</P>);

    const pComponent = screen.getByText('p');

    expect(pComponent).toBeInTheDocument();
  });
});
