import React from 'react';

export default function Panel(props) {
  return <div className={`panel ${(props.className || '')}`} style={props.style} >{props.children}</div>;
}