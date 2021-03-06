import React, { Component } from 'react';
import { Combine } from 'util.js';

import Icon from 'components/Icon';

import './style.less';

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      over: false,
    };
  }

  loadImage = (file) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(file);
  });

  onDrop = async (e) => {
    e.preventDefault();
    this.setState({ image: true });

    const image = await this.loadImage(this.file.files[0]);
    if (this.props.onSelect) this.props.onSelect(image, this.props.name);
    this.image.src = image;
  }

  onDragOver = () => this.setState({ over: true });
  onDragLeave = () => this.setState({ over: false });

  render() {
    const { image, over } = this.state;
    const { width, height, color, className } = this.props;

    return (
      <div className={Combine('input-image', { active: image, hover: over }, className)}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        style={{ backgroundColor: color, borderColor: color }}>

        <input type="file" name="image" ref={(input) => { this.file = input; }} onChange={this.onDrop} />
        <img alt="upload preview" ref={(image) => { this.image = image; }} style={{ width, height }} />
        <Icon className="waiting" icon="image" />
        <Icon className="ready" icon="download" />
      </div>
    );
  }
}
