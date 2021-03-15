import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';

import { Paginator } from './Paginator';

let root: ReactTestInstance;
const mockCallback = jest.fn();
const props = {
  pageSize: 5,
  totalItemsCount: 100,
  currentPage: 1,
  portionSize: 10,
  changePageHandler: mockCallback,
};

describe('Paginator component', () => {
  beforeEach(() => {
    root = TestRenderer.create(<Paginator {...props} />).root;
  });

  it('should matches the snapshot', () => {
    const component = TestRenderer.create(<Paginator {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render all buttons', () => {
    const buttons = root.findAllByType('button');
    expect(buttons).toHaveLength(14);
  });

  it('callback should be called', () => {
    root.props.changePageHandler(2);
    expect(mockCallback.mock.calls).toHaveLength(1);
  });
});
