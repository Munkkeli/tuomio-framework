import React, { Component } from 'react';

import Icon from 'components/Icon';

import './style.less';

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    const { title, actions, children } = this.props;

    return (
      <div className="modal">
        <div className="head">
          <h2 className="title">{title}</h2>
          <div className="close"><Icon icon="x" style={{ width: 16, height: 16 }} /></div>
        </div>
        <div className="content">
          {children}
        </div>
        <div className="actions">
          {actions.reverse().map(action => action)}
        </div>
      </div>
    );
  }
}