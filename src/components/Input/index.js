import React, { Component } from 'react';
import Joi from 'joi';
import { Combine } from 'util.js';

import Icon from 'components/Icon';

import './style.less';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      focus: false,
      valid: null,
    };
  }

  componentDidMount() {
    this.setState({ value: this.props.value || '' });
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) this.props.onChange(e.target.value);
  }

  onFocus = () => this.setState({ focus: true });
  onBlur = () => {
    let valid = null;
    if (this.props.validation) valid = !(Joi.validate(this.state.value, this.props.validation)).error;
    this.setState({ focus: false, valid });
  }

  render() {
    const { focus, valid, value } = this.state;
    const { primary, placeholder, password, validation, className, ...other } = this.props;

    let icon = 'more-horizontal';
    if (valid) icon = 'check';
    if (valid === false && value && !focus) icon = 'x';

    return (
      <div className={Combine('input', { focus, primary, value, validation, valid, invalid: (valid === false && value && !focus) }, className)} onClick={this.onToggle}>
        <div className="status">
          <Icon icon={icon} style={{ width: 12, height: 12 }} />
        </div>
        <input
          type={password ? 'password' : 'text'}
          placeholder={placeholder}
          value={value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...other}
        />
      </div>
    );
  }
}