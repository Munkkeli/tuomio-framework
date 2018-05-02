import React from 'react';
import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';
import { Combine } from 'util.js';

import Icon from 'components/Icon';

import Text from '../text';

export default class Password extends Text {
  static propTypes = {
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    validation: PropTypes.func,
    meter: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    value: '',
    placeholder: '',
    validation: null,
    meter: false,
    onChange: null,
    onBlur: null,
    className: '',
    disabled: false,
  }

  onChange = (e) => {
    let { valid } = this.state;
    if (this.props.onChange) this.props.onChange(e.target.value);
    if (this.props.meter) valid = this.validate(this.props.validation, e.target.value);
    this.setState({ value: e.target.value, valid });
  }

  render() {
    const { focus, valid, value, show } = this.state;
    const { name, placeholder, validation, meter, className } = this.props;
    const invalid = (valid === false && (value || show) && !focus);

    let icon = 'more-horizontal';
    if (valid) icon = 'check';
    if (invalid) icon = 'x';

    let strength = false;
    if (meter) strength = ['invalid', 'bad', 'weak', 'good', 'strong'][zxcvbn(value).score];

    return (
      <div key={name} className={Combine('input', { focus, value, validation, show, valid, invalid }, className)}>
        <div className={`status ${valid && meter && `password ${strength}`}`}>
          <Icon icon={icon} style={{ width: 12, height: 12 }} />
        </div>
        <input
          id={name}
          name={name}
          type="password"
          placeholder={placeholder}
          value={value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </div>
    );
  }
}
