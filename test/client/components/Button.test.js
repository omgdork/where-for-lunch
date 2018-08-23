import React from 'react';
import { shallow } from 'enzyme';
import Button from 'client/components/Button/Button';

describe('<Button />', () => {
  it('should be disabled if disabled property is set to true.', () => {
    const button = shallow(<Button disabled={true} />);
    expect(button.props()).toHaveProperty('disabled');
  });

  it('should be enabled if disabled property is set to false.', () => {
    const button = shallow(<Button disabled={false} />);
    expect(button.props().disabled).toBeFalsy();
  });
});
