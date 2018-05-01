import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Combine } from 'util.js';

import './style.less';

export class TagGroup extends Component {
  static propTypes = {
    children: PropTypes.array,
  }

  static defaultProps = {
    children: [],
  }

  constructor(props) {
    super(props);

    const onRemoveAction = (tag) => {
      this.onRemove(tag.value);
      if (tag.onRemove) tag.onRemove(tag.value);
    };

    this.state = {
      tags: props.children.map(x => ({
        ...x.props,
        value: x.props.value || x.props.text,
        onRemoveGroup: onRemoveAction,
      })),
    };
  }

  onRemove = (value) => {
    this.setState({ tags: this.state.tags.filter(x => x.value !== value) });
  }

  render() {
    const { tags } = this.state;

    return (
      <div className="tag-group">
        {tags.map(x => <Tag {...x} />)}
      </div>
    );
  }
}

function Tag(props) {
  const { text, value, canRemove, className, onClick, onRemove, onRemoveGroup } = props;

  const onRemoveAction = () => (onRemoveGroup ? onRemoveGroup(props) : onRemove(value || text));
  const onKeyUpAction = () => {};

  const onClickAction = (event) => {
    const elem = event.target.className.split(' ')[0];
    if (elem === 'tag' && onClick) onClick(value);
    if (elem === 'remove') onRemoveAction();
  };

  return (
    <button className={Combine('tag', { canRemove }, className)} onClick={onClickAction} onKeyUp={onKeyUpAction}>
      {text}
      <div className="remove">×</div>
    </button>
  );
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string,
  canRemove: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  onRemoveGroup: PropTypes.func,
};

Tag.defaultProps = {
  value: null,
  canRemove: false,
  className: '',
  onClick: null,
  onRemove: null,
  onRemoveGroup: null,
};

export default Tag;
