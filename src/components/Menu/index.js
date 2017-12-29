import React from 'react';

import Button from 'components/Button';
import Icon from 'components/Icon';

import './style.less';

function Item(props) {
  return (
    <a className="item" target="_blank" href={props.url}>
      <div className="color" style={{ backgroundColor: props.color }} />
      <div className="info">
        <div className="name">{props.name}</div>
        <div className="description">{props.description}</div>
      </div>
    </a>
  );
}

export default function Menu(props) {
  return (
    <div className={`menu ${props.open ? 'open' : ''}`} style={{ opacity: props.open | 0 }}>
      <div className="close" onClick={props.onClose}><Icon icon="x" /></div>

      <div className="content">
        <h2>How It's Made?</h2>

        {props.items.ui && <h3><Icon icon="layout" style={{ width: 16, height: 16 }} /><b>UI</b> — How things look</h3>}
        {props.items.ui && props.items.ui.map((item, i) => <Item key={i} {...item} />)}

        {props.items.js && <h3><Icon icon="settings" style={{ width: 16, height: 16 }} /><b>JS</b> — How things act</h3>}
        {props.items.js && props.items.js.map((item, i) => <Item key={i} {...item} />)}

        {props.items.data && <h3><Icon icon="pie-chart" style={{ width: 16, height: 16 }} /><b>Data</b> — Where things come from</h3>}
        {props.items.data && props.items.data.map((item, i) => <Item key={i} {...item} />)}
      </div>
      
      <div className="panel">
        <Button icon="github" />
        <Button text="Learn more" />
      </div>
    </div>
  );
}