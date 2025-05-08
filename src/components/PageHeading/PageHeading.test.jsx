import { describe, it, expect } from 'vitest';
import PageHeading from './PageHeading';
import { screen, render } from '@testing-library/react';

describe('PageHeading component', () => {
  it('Should render a heading based on props', () => {
    render(<PageHeading>Hello world!</PageHeading>);
    const heading = screen.getByText(/hello world!/i);
    expect(heading).toBeInTheDocument();
  });
});
