import React, { Component } from 'react';

import './style.less';

export default class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: false,
    };
  }

  componentDidMount() {
    this.setState({ value: this.props.value || false });
  }

  onToggle = () => {
    const value = !this.state.value;
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(value);
  }

  render() {
    const { label, image } = this.props;

    return (
      <div className={`select ${this.state.value}`} onClick={this.onToggle}>
        <div className="background" style={{ backgroundImage: `url(${image})` }} />
        <div className="info">
          <div className="toggle" />
          <label>{label}</label>
        </div>
      </div>
    );
  }
}