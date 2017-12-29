import React, { Component } from 'react';
import { Combine } from 'util.js';

import Button from 'components/Button';

import './style.less';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  onNext = () => {
    if (this.state.index >= this.props.children.length - 1) return;
    this.setState({ index: this.state.index + 1 });
  }

  onPrevious = () => {
    if (this.state.index <= 0) return;
    this.setState({ index: this.state.index - 1 });
  }

  render() {
    const { children, className } = this.props;

    return (
      <div className={Combine('carousel', { }, className)}>
        <Button className="left" icon="chevron-left" onClick={this.onPrevious} big secondary />
        <Button className="right" icon="chevron-right" onClick={this.onNext} big secondary />

        <div className="fade">
          <div className="row">
            {children.map((x, i) =>
              <div key={i} className={`item ${this.state.index === i ? 'selected' : ''}`}>
                <div className="inner" style={{ marginLeft: `calc((-100% - 32px) * ${this.state.index})` }}>
                  <div className="center"><div className="scale">{x}</div></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}