import React from 'react';
import { parse } from 'twemoji';
import * as EmojiJS from 'emoji-js';

import './style.less';

const emojify = new EmojiJS();
emojify.allow_native = true;
emojify.replace_mode = 'unified';

export default function Emoji(props) {
  const { icon } = props;

  return (
    <div className="emoji" dangerouslySetInnerHTML={{ __html: parse(emojify.replace_colons(icon), { folder: 'svg', ext: '.svg' }) }} />
  );
}