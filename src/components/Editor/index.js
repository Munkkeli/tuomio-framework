import React, { Component } from 'react';

import Icon from 'components/Icon';

import './style.less';

export default class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    this.draw();
  }

  draw = () => {
    const ctx = this.canvas.getContext('2d');

    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.stroke();
  }

  render() {
    return (
      <div className="editor">
        <div className="modal">
          <canvas className="preview" ref={(canvas) => { this.canvas = canvas; }}>

          </canvas>
          <input type="file" name="image" />
          <Icon className="waiting" icon="image" />
          <Icon className="ready" icon="download" />
        </div>
      </div>
    );
  }
}
