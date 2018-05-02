import React from 'react';
import zxcvbn from 'zxcvbn';
import { Combine } from 'util.js';

import Icon from 'components/Icon';

import Text from '../text';

export default class Password extends Text {
  onChange = (e) => {
    const valid = this.validate(this.props.validation, e.target.value);
    if (this.props.onChange) this.props.onChange(e.target.value);
    this.setState({ value: e.target.value, valid });
  }

  render() {
    const { focus, valid, value, show } = this.state;
    const { name, placeholder, validation, className } = this.props;
    const invalid = (valid === false && (value || show) && !focus);

    let icon = 'more-horizontal';
    if (valid) icon = 'check';
    if (invalid) icon = 'x';

    const strength = ['invalid', 'bad', 'weak', 'good', 'strong'][zxcvbn(value).score];

    return (
      <div key={name} className={Combine('input', { focus, value, validation, show, valid, invalid }, className)}>
        <div className={`status ${valid && `password ${strength}`}`}>
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
