import React, { Component } from 'react';

import './style.less';

export default class Switch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: false,
      focus: false,
    };
  }

  componentDidMount() {
    this.setState({ value: this.props.value || false });
  }

  onToggle = () => {
    if (this.props.disabled) return;

    const value = !this.state.value;
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(value);
  }

  onFocus = () => this.setState({ focus: true });
  onBlur = () => this.setState({ focus: false });

  render() {
    const { label, disabled } = this.props;

    return (
      <div className={`switch ${this.state.value} ${this.state.focus ? 'focus' : ''} ${disabled ? 'disabled' : ''}`} onClick={this.onToggle}>
        <div className="toggle"></div>
        <label>{label}</label>
        <input type="checkbox" checked={this.state.value} onFocus={this.onFocus} onBlur={this.onBlur} disabled={disabled} />
      </div>
    );
  }
}