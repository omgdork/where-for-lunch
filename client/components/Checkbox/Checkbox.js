import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends PureComponent {
  state = {
    isChecked: false,
  }

  handleChange = (e) => {
    const isChecked = e.target.checked;
    const { value, onChange } = this.props;

    this.setState({ isChecked }, () => {
      if (onChange && typeof onChange === 'function') {
        onChange(value, isChecked);
      }
    });
  }

  render() {
    const { value, label } = this.props;

    return (
      <label>
        <input type="checkbox" value={value} checked={this.state.isChecked} onChange={this.handleChange} />
        {label}
      </label>
    );
  }
}

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
