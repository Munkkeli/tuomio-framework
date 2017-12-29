import React, { Component } from 'react';

import Audio from 'components/Audio';
import Button from 'components/Button';
import Carousel from 'components/Carousel';
import Chat from 'components/Chat';
import Code from 'components/Code';
import Header from 'components/Header';
import Image from 'components/Image';
import Input from 'components/Input';
import Modal from 'components/Modal';
import Radio from 'components/Radio';
import Sidebar from 'components/Sidebar';
import Slider from 'components/Slider';
import Switch from 'components/Switch';

import Card from 'components/Card';
import Panel from 'components/Panel';

import 'style.less';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      error: false,
    }
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  play = (context, freq, duration = 100) => {
    const oscillator = context.createOscillator();
    oscillator.frequency.value = freq;
    oscillator.connect(context.destination);
    oscillator.start(0);

    setTimeout(() => {
      oscillator.stop();
    }, duration);
  }

  timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  render() {
    return (
      <div className="main">
        <Header title="👌" icon="circle" tech={{}} loaded={this.state.loaded} />
        <content>
          {<Sidebar />}

          <Modal title="Log In" actions={[<Button text="Register" secondary />, <Button text="Log In" primary />]}>
            <Input label="Email" placeholder="example@example.com" />
            <Input password label="Password" placeholder="••••••••••••••••" />
            <Switch label="Remember me?" value={true} />
          </Modal>

          <Panel className="invisible" style={{ paddingTop: 0 }}>
            <h2><img src="/icons/carousel.png" alt="" /> Carousel</h2>

            <Carousel className="fill">
              <Card title="This is a card" text="A very cool desc for this really cool card!" color="#FC5185" />
              <Card title="This is a card" text="A very cool desc for this really cool card!" color="#364F6B" />
              <Card title="This is a card" text="A very cool desc for this really cool card!" color="#3FC1C9" />
              <Card title="This is a card" text="A very cool desc for this really cool card!" color="#F86254" />
              <Card title="This is a card" text="A very cool desc for this really cool card!" color="#FC5185" />
              <Card title="This is a card" text="A very cool desc for this really cool card!" color="#364F6B" />
              <Card title="This is a card" text="A very cool desc for this really cool card!" color="#3FC1C9" />
              <Card title="This is a card" text="A very cool desc for this really cool card!" color="#F86254" />
            </Carousel>

            <label>Example</label>
            <Code>{[
              '<Carousel>',
              '   ...',
              '</Carousel>',
            ].join('\n')}</Code>
          </Panel>

          <Panel>
            <h2><img src="/icons/buttons.png" alt="" /> Button</h2>

            <label>Normal</label>
            <div className="button-group">
              <Button text="Primary" left primary />
              <Button text="Danger" left danger />
              <Button text="Normal" left />
              <Button text="Secondary" left secondary />
            </div>

            <label>Disabled</label>
            <div className="button-group">
              <Button text="Primary" left primary disabled />
              <Button text="Danger" left danger disabled />
              <Button text="Normal" left disabled />
              <Button text="Secondary" left secondary disabled />
            </div>

            <label>Example</label>
            <Code>{[
              '<Button text="Button" primary />',
              '<Button text="Button" danger />',
              '<Button text="Button" />',
              '<Button text="Button" secondary />\n',
              '<Button text="Button" disabled />\n',
              '<Button text="Button" left />',
              '<Button text="Button" right />'
            ].join('\n')}</Code>
          </Panel>

          <Panel>
            <h2><img src="/icons/inputs.png" alt="" /> Input</h2>
            
            <label>Primary</label>
            <Input label="Primary" placeholder="Primary" primary />
            <label>Normal</label>
            <Input label="Normal" placeholder="Normal" />
            
            <label>Primary</label>
            <Input label="Primary" placeholder="Primary" disabled primary />
            <label>Normal</label>
            <Input label="Normal" placeholder="Normal" disabled />

            <label>Example</label>
            <Code>{[
              '<Input placeholder="Primary" primary />',
              '<Input placeholder="Normal" />\n',
              '<Input placeholder="Disabled" disabled />',
            ].join('\n')}</Code>
          </Panel>

          <Panel>
            <h2><img src="/icons/switches.png" alt="" /> Switch</h2>
            
            <label>Normal</label>
            <Switch label="This switch is on" value={true} />
            <Switch label="This switch is off" value={false} />

            <label>Disabled</label>
            <Switch label="This switch is on" value={true} disabled />
            <Switch label="This switch is off" value={false} disabled />

            <label>Example</label>
            <Code>{[
              '<Switch label="This switch is on" value={true} />',
              '<Switch label="This switch is off" value={false} />\n',
              '<Switch label="This switch is disabled" disabled />',
            ].join('\n')}</Code>
          </Panel>

          <Panel>
            <h2><img src="/icons/radios.png" alt="" /> Radio</h2>
            
            <label>Normal</label>
            <Radio name="normal" options={[
              { name: 'Option', value: 'option' },
              { name: 'Also an option', value: 'optionTwo' },
            ]} />

            <label>Disabled</label>
            <Radio name="disabled" options={[
              { name: 'Option', value: 'option' },
              { name: 'Also an option', value: 'optionTwo' },
            ]} disabled />

            <label>Example</label>
            <Code>{[
              '<Radio name="normal" options={[',
              '   { name: \'Option\', value: \'option\' },',
              '   { name: \'Also an option\', value: \'optionTwo\' },',
              '   { name: \'Another option\', value: \'optionThree\' },',
              ']} disabled />',
            ].join('\n')}</Code>
          </Panel>

          <Panel>
            <h2><img src="/icons/slider.png" alt="" /> Slider</h2>
            
            <label>Slider</label>
            <Slider value={50} />
            <Slider step={20} value={20} />
          </Panel>

          <Panel>
            <h2><img src="/icons/image.png" alt="" /> Audio</h2>

            <Audio />
          </Panel>

          <Panel>
            <h2><img src="/icons/image.png" alt="" /> Image</h2>
            
            <Image />
          </Panel>

          <Panel className="invisible">
            <h2><img src="/icons/chat.png" alt="" /> Chat</h2>

            <Chat right />
            <Chat right />
            <Chat left />
            <Chat left />

            <label>Example</label>
            <Code>{[
              '<Input label="Primary" placeholder="Primary" primary />',
              '<Input label="Normal" placeholder="Normal" />\n',
              '<Input label="Disabled" placeholder="Disabled" disabled />',
            ].join('\n')}</Code>
          </Panel>
        </content>
      </div>
    );
  }
}
