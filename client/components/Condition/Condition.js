import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input/Input';
import Checkbox from '../../components/Checkbox/Checkbox';
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

  handleOnBlurAction = (e) => {
    this.props.action({
      radius: e.target.value,
    });
  }

  handleCheckboxChange = (value, isChecked) => {
    const { price } = this.props.condition;
    const prices = price ? price.split(',') : [];
    const updatedPrices = isChecked ? [...prices, value] : prices.filter(p => p !== value);

    this.props.action({
      price: updatedPrices,
    });
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
