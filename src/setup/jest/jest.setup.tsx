import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (component: ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, '', route);

  return render(component, { wrapper: BrowserRouter });
};
