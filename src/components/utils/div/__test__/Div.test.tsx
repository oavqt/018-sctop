import { render, screen } from '@testing-library/react';
import Div from '../Div';

describe('Div', () => {
  test('expect a Div component to render', () => {
    render(<Div>Div</Div>);

    const divComponent = screen.getByText('Div');

    expect(divComponent).toBeInTheDocument();
  });
});
