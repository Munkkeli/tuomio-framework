import React, { Component } from 'react';

import Menu from 'components/Menu';
import Icon from 'components/Icon';

import './style.less';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  onClick = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { title, icon, tech, loaded } = this.props;

    return (
      <header style={{ opacity: loaded | 0 }}>
        <div className="logo">
          <div className="circle">
            <Icon icon={icon} />
          </div>
          <div className="title"><span>/</span><b>{title}</b></div>
        </div>
        <div className="tech">
          <div className="circle" onClick={this.onClick}>
            <Icon icon="layers" />
          </div>
          <Menu items={tech} open={this.state.open} onClose={this.onClick} />
        </div>
      </header>
    );
  }
}