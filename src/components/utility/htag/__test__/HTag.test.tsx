import { render, screen } from '@testing-library/react';
import HTag from '../HTag';

describe('HTag', () => {
  test('expect a HTag component to render', () => {
    render(<HTag>HTag</HTag>);

    const HTagComponent = screen.getByText('HTag');

    expect(HTagComponent).toBeInTheDocument();
  });

  test('expect the HTag components tagName to equal the type prop', () => {
    render(<HTag attrs={{ type: 'h2' }}>HTag</HTag>);

    const HTagComponent = screen.getByText('HTag');

    expect(HTagComponent.tagName).toBe('H2');
  });

  test('expect the HTag components tagName to equal the type prop --redundancy', () => {
    render(<HTag attrs={{ type: 'h4' }}>HTag</HTag>);

    const HTagComponent = screen.getByText('HTag');

    expect(HTagComponent.tagName).toBe('H4');
  });
});
