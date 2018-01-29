import React, { Component } from 'react';
import { Combine } from 'util.js';

import './style.less';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      focus: false,
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
  onBlur = () => this.setState({ focus: false });

  render() {
    const { focus } = this.state;
    const { primary, placeholder, password, className, ...other } = this.props;

    return (
      <div className={Combine('input', { focus, primary }, className)} onClick={this.onToggle}>
        <input
          type={password ? 'password' : 'text'}
          className="text"
          placeholder={placeholder}
          value={this.state.value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...other}
        />
      </div>
    );
  }
}