import React from 'react';
import { render } from '@testing-library/react';
import AddItemForm from './AddItemForm';

describe('AddItemForm Component', () => {
  describe('Renders AddItemForm Element', () => {
    it('should render the component', () => {
      const { container } = render(<AddItemForm />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
