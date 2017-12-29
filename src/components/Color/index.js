import React, { Component } from 'react';

import './style.less';

export default class Color extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '#000000',
    };
  }

  componentDidMount() {
    this.setState({ value: this.props.value || '#000000' });
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) this.props.onChange(e.target.value);
  }

  render() {
    const { text } = this.props;

    return (
      <div className="color" onClick={this.onToggle}>
        <label>{text}</label>
        <input type="text" className="hex" value={this.state.value} style={{ backgroundColor: this.state.value }} onChange={this.onChange} />
      </div>
    );
  }
}