import React, { Component } from 'react';
import { Combine } from 'util.js';

import Icon from 'components/Icon';

import './style.less';

export default class Record extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
    };
  }

  componentDidMount() {
    
  }

  onFocus = () => this.setState({ focus: true });
  onBlur = () => this.setState({ focus: false });

  render() {
    const { title, artist, album, cover, className } = this.props;
    const { focus } = this.state;

    return (
      <div className={Combine('record', { focus }, className)}>
        <div className="cover" style={{ backgroundImage: 'url(' + cover + ')' }} />
        <div className="info">
          <h3>{title}</h3>
          <p>{artist} - {album}</p>
        </div>
      </div>
    );
  }
}