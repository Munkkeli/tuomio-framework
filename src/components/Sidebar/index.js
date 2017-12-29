import React, { Component } from 'react';

import Icon from 'components/Icon';

import './style.less';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || (props.options ? props.options[0].value : null),
      focus: false,
    };
  }

  onToggle = (value) => {
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(value);
  }

  onFocus = () => this.setState({ focus: true });
  onBlur = () => this.setState({ focus: false });

  render() {
    // const { options = [{ name: '', value: 'option' }] } = this.props;

    return (
      <nav className={`sidebar`}>
        <h2><img src="/icons/docs.png" alt="" /> Docs</h2>

        <section>
          <label>General</label>
          <button className="selected"><Icon icon="search" style={{ width: 16, height: 16 }} /> Test</button>
          <button><Icon icon="cloud" style={{ width: 16, height: 16 }} /> Test</button>
          <button><Icon icon="sliders" style={{ width: 16, height: 16 }} /> Test</button>
        </section>

        <section>
          <label>General</label>
          <button><Icon icon="search" style={{ width: 16, height: 16 }} /> Test</button>
          <button><Icon icon="cloud" style={{ width: 16, height: 16 }} /> Test</button>
          <button><Icon icon="sliders" style={{ width: 16, height: 16 }} /> Test</button>
        </section>
      </nav>
    );
  }
}