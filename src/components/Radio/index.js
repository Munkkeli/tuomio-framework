import React, { Component } from 'react';
import { Combine } from 'util.js';

import './style.less';

function Toggle(props) {
  const { name, text, value, group, onChange, onFocus, onBlur } = props;

  return (
    <div className={`radio`} onClick={onChange.bind(this, name)}>
      <div className={`visual ${value}`} />
      <div className="label">{text}</div>
      <input type="radio" name={group} checked={value} onChange={onChange.bind(this, name)} onFocus={onFocus} onBlur={onBlur} />
    </div>
  );
}

export default class Radio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || (props.options ? props.options[0].value : null),
      focus: false,
    };
  }

  onToggle = (value) => {
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(value);
  }

  onFocus = () => this.setState({ focus: true });
  onBlur = () => this.setState({ focus: false });

  render() {
    const { focus } = this.state;
    const { name, disabled, options = [{ name: '', value: 'option' }], className } = this.props;

    return (
      <div className={Combine('radio-group', { focus, disabled }, className)}>
        <div className="radio-options">
          {options.map((option) => <Toggle
            key={option.value}
            name={option.value}
            group={name}
            text={option.name}
            value={this.state.value === option.value}
            onChange={this.onToggle}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            disabled={disabled}
          />)}
        </div>
      </div>
    );
  }
}