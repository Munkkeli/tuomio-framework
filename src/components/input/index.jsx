import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Joi from 'joi';
import zxcvbn from 'zxcvbn';
import { Combine } from 'util.js';

import Icon from 'components/Icon';

import './style.less';

export default class Input extends Component {
  static propTypes = {
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    validation: PropTypes.object,
    password: PropTypes.bool,
    meter: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
  }

  static defaultProps = {
    value: '',
    placeholder: '',
    validation: null,
    password: false,
    meter: false,
    onChange: null,
    onBlur: null,
    className: '',
  }

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      focus: false,
      valid: null,
      show: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.validation !== nextProps.validation && nextProps.validation) {
      const valid = this.validate(nextProps.validation);
      this.setState({ valid });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.value !== nextState.value) return true;
    if (this.state.valid !== nextState.valid) return true;
    if (this.state.focus !== nextState.focus) return true;
    if (this.state.show !== nextState.show) return true;
    return false;
  }

  onChange = (e) => {
    let { valid } = this.state;
    if (this.props.onChange) this.props.onChange(e.target.value);
    if (this.props.meter) valid = this.validate(this.props.validation, e.target.value);
    this.setState({ value: e.target.value, valid });
  }

  onFocus = () => {
    this.setState({ focus: true, show: false });
  }

  onBlur = () => {
    const valid = this.validate();
    this.setState({ focus: false, valid });

    if (this.props.onBlur) this.props.onBlur(this.state.value);
  }

  validate = (validation = this.props.validation, value = this.state.value) => {
    if (validation) return !(Joi.validate(value, (typeof validation === 'function') ? validation() : validation)).error;
    return null;
  }

  check = () => {
    const valid = this.validate();
    this.setState({ valid, show: true });
    return valid;
  }

  render() {
    const { focus, valid, value, show } = this.state;
    const { name, placeholder, password, validation, meter, className } = this.props;
    const invalid = (valid === false && (value || show) && !focus);

    let icon = 'more-horizontal';
    if (valid) icon = 'check';
    if (invalid) icon = 'x';

    let strength = null;
    if (password && meter) strength = ['invalid', 'bad', 'weak', 'good', 'strong'][zxcvbn(value).score];

    return (
      <div key={name} className={Combine('input', { focus, value, validation, show, valid, invalid }, className)}>
        <div className={`status ${valid && password && meter ? `password ${strength}` : ''}`}>
          <Icon icon={icon} style={{ width: 12, height: 12 }} />
        </div>
        <input
          id={name}
          name={name}
          type={password ? 'password' : 'text'}
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
