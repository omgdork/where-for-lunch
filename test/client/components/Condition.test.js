import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Condition from 'client/components/Condition/Condition';

describe('<Condition />', () => {
  it('should render with price checkboxes.', () => {
    const condition = {};
    const component = renderer
      .create(<Condition condition={condition} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should trigger the action when a price filter is changed.', () => {
    const condition = {};
    const action = jest.fn();
    const wrapper = mount(<Condition condition={condition} action={action} />);
    const checkbox = wrapper.find('input[type="checkbox"]').first();

    checkbox.simulate('change');

    expect(action.mock.calls.length).toBe(1);
  });
});
