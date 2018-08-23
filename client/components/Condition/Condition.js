import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Checkbox from 'components/Checkbox/Checkbox';
import styles from './Condition.css';

export default class Condition extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    action: PropTypes.func,
    prices: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    prices: ['$', '$$', '$$$', '$$$$'],
  }

  state = { ...this.props.condition };

  handleOnBlurAction = (e) => {
    this.setState({
      radius: e.target.value,
    }, () => this.props.action(this.state));
  }

  handleCheckboxChange = (value, isChecked) => {
    const prices = this.state.price ? this.state.price.split(',') : [];
    const updatedPrices = isChecked ? [...prices, value] : prices.filter(price => price !== value);

    this.setState({
      price: updatedPrices.join(','),
    }, () => this.props.action(this.state));
  }

  render() {
    const {
      condition: { radius },
      prices,
    } = this.props;

    return (
      <div className={styles.root}>
        <div>
          {prices.map((price, i) => <Checkbox key={i} value={`${i + 1}`} label={price} onChange={this.handleCheckboxChange} />)}
        </div>
        <span>radius:</span>
        <Input defaultValue={radius} onBlurAction={this.handleOnBlurAction}></Input>
        <span>meters</span>
      </div>
    );
  }
}
