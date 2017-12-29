import React, { Component } from 'react';

import Button from 'components/Button';
import Emoji from 'components/Emoji';

import './style.less';

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,

      votes: {
        ':+1:': ['munkkeli'],
        ':-1:': ['zantze'],
      }
    };
  }

  onFocus = () => this.setState({ focus: true });
  onBlur = () => this.setState({ focus: false });

  render() {
    const { right } = this.props;

    return (
      <div className={`chat ${right ? 'right' : ''}`}>
        <div className="user" style={{ backgroundImage: 'url(https://api.adorable.io/avatars/48/munkkeli)' }} />
        <div className="content">
          <div className="text">fdggggggggg asdjkasjkdh kjashdkjhasjkhdkhask hkjasdhdjkashjkdhaskjh kjashjkh dkjahsk hkjhkh dsfds fsd sd ds fsdfsdfds fdsfdsad asd as d</div>
          
          <div className="actions">
            <Button text="Spin" primary />
            <Button text="Bet" />
            <Button text="Cancel" secondary />

            {Object.entries(this.state.votes).map(x => <div className={`vote ${x[1].indexOf('munkkeli') >= 0 ? 'selected' : ''}`}>
              <span className="icon"><Emoji icon={x[0]} /></span>
              <span className="count">{x[1].length}</span>
            </div>)}
          </div>
        </div>
      </div>
    );
  }
}