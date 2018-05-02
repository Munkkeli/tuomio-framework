import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Combine } from 'util.js';

import Icon from 'components/Icon';

export default class Search extends Component {
  static propTypes = {
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    validation: PropTypes.func,
    onChange: PropTypes.func,
    className: PropTypes.string,
  }

  static defaultProps = {
    value: '',
    placeholder: '',
    validation: null,
    onChange: null,
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

  onFocus = () => this.setState({ focus: true, show: false });
  onBlur = () => this.setState({ focus: false, valid: this.validate() });

  validate = (validation = this.props.validation, value = this.state.value) => {
    if (!validation) return true;
    return validation(value);
  }

  check = () => {
    const valid = this.validate();
    this.setState({ valid, show: true });
    return valid;
  }

  render() {
    const { focus, valid, value, show } = this.state;
    const { name, placeholder, validation, className } = this.props;

    const invalid = (!valid && (value || show) && !focus);

    let icon = 'more-horizontal';
    if (valid) icon = 'check';
    if (invalid) icon = 'x';

    return (
      <div key={name} className={Combine('input', { focus, value, validation, show, valid, invalid }, className)}>
        <div className="status"><Icon icon={icon} style={{ width: 12, height: 12 }} /></div>
        <input
          id={name}
          name={name}
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
