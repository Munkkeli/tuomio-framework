import React from 'react';

import './style.less';

export default function Code(props) {
  return <pre className="code"><code className="language-jsx">{props.children}</code></pre>;
}