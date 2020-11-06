import React from 'react';
import { render } from '@testing-library/react';
import ItemDetailed from './ItemDetailed';

describe('ItemDetailed Component', () => {
  describe('Renders ItemDetailed Element', () => {
    it('should render the component', () => {
      const { container } = render(<ItemDetailed />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
