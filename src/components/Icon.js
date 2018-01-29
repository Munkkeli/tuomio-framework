import React from 'react';
import feather from 'feather-icons';

export default function Icon(props) {
  const { icon, className, ...other } = props;

  return <div
    className={`icon ${className ? className : ''}`}
    dangerouslySetInnerHTML={{ __html: feather.icons[icon].toSvg(props.style ? { width: props.style.width, height: props.style.height } : {}) }}
    {...other}
  />;
}