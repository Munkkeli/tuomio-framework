import React, { Component } from 'react';
import { Combine } from 'util.js';

import './style.less';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: false,
      focus: false,
      from: 0,
      to: 100,
      position: 0,
    };
  }

  componentDidMount() {
    this.setState({
      value: this.props.value || false,
      position: (this.props.value / (this.state.to - this.state.from)),
    });
  }

  onToggle = () => {
    if (this.props.disabled) return;

    const value = !this.state.value;
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(value);
  }

  onFocus = () => this.setState({ focus: true });
  onBlur = () => this.setState({ focus: false });

  onMouseDown = (e) => {
    if (e.button !== 0) return

    this.setState({ dragging: true })
    e.stopPropagation();
    e.preventDefault();
  };

  onMouseUp = (e) => {
    this.setState({ dragging: false });
    e.stopPropagation();
    e.preventDefault();
  };

  onMouseMove = (e) => {
    if (!this.state.dragging) return;
    
    const parent = this.bar.getBoundingClientRect();
    const width = this.bar.offsetWidth;
    this.setState({ position: Math.min(Math.max((e.pageX - parent.left) / width, 0), 1) });
    console.log(this.state.position);

    e.stopPropagation();
    e.preventDefault();
  };

  render() {
    const { step, value, disabled, className } = this.props;
    const { focus, to, from, position, dragging } = this.state;

    const steps = Math.floor((to - from) / step);
    const pos = step ? (Math.round(position * steps) / steps) * 100 : (position * 100);

    return (
      <div className={Combine('slider', { focus, dragging }, className)} onClick={this.onToggle} onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove}>
        <div className="bar" ref={(bar) => { this.bar = bar; }}>
          <div className="progress" style={{ width: `${pos}%` }} />
          {step && [...Array(steps + 1)].map(() => <i className="dot" />)}
        </div>

        <div className="container">
          <button
            style={{ left: `${pos}%` }}
            ref={(knob) => { this.knob = knob; }}
            onMouseDown={this.onMouseDown}
            onMouseUp={this.onMouseUp}
            onMouseMove={this.onMouseMove}
          />
        </div>
      </div>
    );
  }
}