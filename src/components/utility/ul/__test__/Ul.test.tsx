import { render, screen } from '@testing-library/react';
import Ul from '../Ul';

describe('Ul', () => {
  test('expect a Ul component to render', () => {
    render(<Ul>ul</Ul>);

    const ulComponent = screen.getByRole('list');
    const ulComponentChild = screen.getByText('ul');

    expect(ulComponent).toBeInTheDocument();
    expect(ulComponentChild).toBeInTheDocument();
  });
});
