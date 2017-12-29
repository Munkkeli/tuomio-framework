import React from 'react';

// import Button from 'components/Button';

export default function Card(props) {
  return (
    <div className="card">
      <div className="image" style={{ backgroundColor: props.color, backgroundImage: `url(${props.image})` }} />
      <div className="info">
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}