import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (
  component: ReactElement,
  { route = '/' } = {}
): RenderResult<
  typeof import('/home/oav/.projects/toprojects/018/node_modules/@testing-library/dom/types/queries'),
  HTMLElement
> => {
  window.history.pushState({}, '', route);

  return render(component, { wrapper: BrowserRouter });
};

export default renderWithRouter;
