import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';

import { ProfileStatus } from './ProfileStatus';

let root: ReactTestInstance;
const mockCallback = jest.fn();
const props = { status: 'Status is not empty', updateStatus: mockCallback };

describe('ProfileStatus component', () => {
  beforeEach(() => {
    root = TestRenderer.create(<ProfileStatus {...props} />).root;
  });

  it('should matches the snapshot', () => {
    const component = TestRenderer.create(<ProfileStatus {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('status from props should be in the state', () => {
    const { instance } = root;
    expect(instance.state.status).toBe('Status is not empty');
  });

  it('after creation <span> should be displayed', () => {
    expect(() => {
      root.findByType('span');
    }).not.toThrow();
  });

  it("after creation <input> shouldn't be displayed", () => {
    expect(() => {
      root.findByType('input');
    }).toThrow();
  });

  it('after creation <span> should contains correct status', () => {
    const span = root.findByType('span');
    expect(span.children[0]).toBe('Status is not empty');
  });

  it('input should be displayed in editMode instead of span', () => {
    const span = root.findByType('span');
    span.props.onClick();

    const input = root.findByType('input');
    expect(input.props.value).toBe('Status is not empty');
  });

  it('callback should be called', () => {
    const { instance } = root;
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls).toHaveLength(1);
  });
});
