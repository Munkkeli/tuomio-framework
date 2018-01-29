import React, { Component } from 'react';
import { Combine } from 'util.js';

import Icon from 'components/Icon';

import './style.less';

export default class Audio extends Component {
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
    this.setState({ position: (e.pageX - parent.left) / width });
    console.log(this.state.position);

    e.stopPropagation();
    e.preventDefault();
  };

  render() {
    const { step, value, disabled, className } = this.props;
    const { focus, to, from, position } = this.state;

    return (
      <div className={Combine('audio', { focus }, className)}>
        <div className="controls">
          <div className="play">
            <Icon icon="play" style={{ width: 20, height: 20 }} />
          </div>
        </div>
        <div className="visual">
        
        </div>
      </div>
    );
  }
}