import React, { Component } from 'react';
import { Combine } from 'util.js';

import './style.less';

export default class Taskbar extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  onClickClose = () => { }
  onClickMinimize = () => { }
  onClickMaximize = () => { }

  onClickBack = () => {
    this.props.goBack();
  }

  render() {
    const { back } = this.state;
    const { title, history, maximize, minimize, close, className } = this.props;

    return (
      <div className={Combine('taskbar', { }, className)}>
        <div className={Combine('back', { visible: history.length > 1 })} onClick={this.onClickBack} />
        <div className="title">{title}</div>

        {close && <div className="close" onClick={this.onClickClose} />}
        {maximize && <div className="maximize" onClick={this.onClickMaximize} />}
        {minimize && <div className="minimize" onClick={this.onClickMinimize} />}
      </div>
    );
  }
}