import React from 'react';

import Button from 'components/Button';

export default function Navigation(props) {
  return (
    <div className="navigation">
      <Button secondary left text="Previous" onClick={props.navigation.back} />
      <Button text="Next step" onClick={props.onDone} />
      <Button secondary text="Skip" onClick={props.navigation.next} />
    </div>
  );
}