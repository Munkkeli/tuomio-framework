import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Joi from 'joi';
import { Combine } from 'util.js';

import Icon from 'components/Icon';

export default class Text extends Component {
  static propTypes = {
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    validation: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    value: '',
    placeholder: '',
    validation: null,
    onChange: null,
    onBlur: null,
    className: '',
    disabled: false,
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
      this.setState({ valid: this.validate(nextProps.validation) });
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
    if (this.props.onChange) this.props.onChange(e.target.value);
    this.setState({ value: e.target.value });
  }

  onBlur = () => {
    if (this.props.onBlur) this.props.onBlur(this.state.value);
    this.setState({ focus: false, valid: this.validate() });
  }

  onFocus = () => this.setState({ focus: true, show: false });

  validate = (validation = this.props.validation, value = this.state.value) => {
    if (typeof validation === 'function') return validation(value);
    if (validation) return !(Joi.validate(value, validation).error);
    return null;
  }

  check = () => {
    const valid = this.validate();
    this.setState({ valid, show: true });
    return valid;
  }

  render() {
    const { focus, valid, value, show } = this.state;
    const { name, placeholder, validation, className, disabled } = this.props;

    const invalid = (!valid && (value || show) && !focus);

    let icon = 'more-horizontal';
    if (valid) icon = 'check';
    if (invalid) icon = 'x';

    return (
      <div key={name} className={Combine('input', { focus, value, validation, show, valid, invalid, disabled }, className)}>
        <div className="status"><Icon icon={icon} style={{ width: 12, height: 12 }} /></div>
        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          disabled={disabled}
        />
      </div>
    );
  }
}
