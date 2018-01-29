import React, { Component } from 'react';
import { Combine } from 'util.js';

import Icon from 'components/Icon';

import './style.less';

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
    };
  }

  onFocus = () => this.setState({ focus: true });
  onBlur = () => this.setState({ focus: false });

  render() {
    const { icon, text, primary, secondary, danger, left, className, onClick, ...other } = this.props;
    const { focus } = this.state;
    
    return (
      <button
        className={Combine('button', { icon, primary, secondary, danger, left, focus }, className)}
        onClick={onClick}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        {...other}
      >
        {icon && <Icon icon={icon} style={{ width: 16, height: 16 }} />} {text}
      </button>
    );
  }
}