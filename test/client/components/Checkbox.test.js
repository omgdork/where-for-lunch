import React from 'react';
import { shallow, mount } from 'enzyme';
import Checkbox from 'client/components/Checkbox/Checkbox';

describe('<Checkbox />', () => {
  it('should have state "isChecked" equal to false by default.', () => {
    const wrapper = shallow(<Checkbox value="1" label="Test Label" />);

    expect(wrapper.state().isChecked).toBe(false);
  });

  it('should be checked when "isChecked" state is true.', () => {
    const wrapper = shallow(<Checkbox value="1" label="Test Label" />);

    wrapper.setState({ isChecked: true });

    const checkbox = wrapper.find('input');

    expect(checkbox.props().checked).toBe(true);
  });

  it('should trigger a function when the checkbox is changed.', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Checkbox value="1" label="Test Label" onChange={onChange} />);

    wrapper.find('input').simulate('change');

    expect(onChange.mock.calls.length).toBe(1);
  });
});
