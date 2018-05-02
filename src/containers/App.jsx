import React, { Component } from 'react';
import joi from 'joi';

import Audio from 'components/Audio';
import Button from 'components/Button';
import Carousel from 'components/Carousel';
import Chat from 'components/Chat';
import Code from 'components/Code';
import Image from 'components/Image';
import * as Input from 'components/input';
import Modal from 'components/Modal';
import Radio from 'components/Radio';
import Record from 'components/Record';
import Sidebar from 'components/Sidebar';
import Slider from 'components/Slider';
import Switch from 'components/Switch';
import Tag, { TagGroup } from 'components/Tag';

import Card from 'components/Card';
import Panel from 'components/Panel';

import 'style.less';

console.log('Input', Input);

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

  render() {
    return (
      <div className="main">
        <content>
          {<Sidebar />}

          <Panel className="invisible">
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

          <Panel className="invisible" style={{ paddingTop: 0 }}>
            <h2><img src="/icons/carousel.png" alt="" /> Record</h2>

            <Record title="Green Light" artist="Lorde" album="Melodrama" cover="https://lh3.googleusercontent.com/fO7nGcSSXGaQ3i96fULjaFy9oPK1DVlk90tMJqJEY_Cj5qqkzu_S79K0qH-ksoiQT9nP16OmjgM=s90-c-e100" />
            <Record title="POWER" artist="Kanye West" album="My Beautiful Dark Twisted Fantasy" cover="https://lh3.googleusercontent.com/ki6_nfiySu-l2TjGSC0sqM6uTl3-34wTNp0TDNCI46lIneEzFRta7Xa0dbZka5HTUiwzARRLXN4=s90-c-e100" />
            <Record title="In The Night" artist="The Weeknd" album="Beauty Behind The Madness" cover="https://lh3.googleusercontent.com/J3d3t-um5e6ouR2hIqBPNnI-oMeCHkyYckFEJxILAYYV05HguInmLGGQHmdZEyvPyBOqFukSbQ=s90-c-e100" />
            <Record title="The Bad Touch" artist="Bloodhound Gang" album="Hooray For Boobies" cover="https://lh3.googleusercontent.com/v-SHPMvaFKYqOgwk4FM8T2tH_19XHEEEy7lcMPEm6rqfpIjDf1XF_HNgs5b9LYpw-45Qad9nlw=s90-c-e100" />
            <Record title="Walkway Blues (feat. Jordan Lawlor)" artist="M83" album="Junk" cover="https://lh3.googleusercontent.com/4P27kLHhv45YpReu-IxiHRCTDfH3w86Bg89fYtNfpkhUGmkxSrw7QeWTDxVyPKOMGhGWsVVsjA=s90-c-e100" />
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
            <Code>
              {[
                '<Button text="Button" primary />',
                '<Button text="Button" danger />',
                '<Button text="Button" />',
                '<Button text="Button" secondary />\n',
                '<Button text="Button" disabled />\n',
                '<Button text="Button" left />',
                '<Button text="Button" right />',
              ].join('\n')}
            </Code>
          </Panel>

          <Panel>
            <h2><img src="/icons/inputs.png" alt="" /> Input</h2>

            <label>Text</label>
            <Input.Text placeholder="Text" />
            <label>Validated Text</label>
            <Input.Text placeholder="Validated Text" validation={value => !joi.validate(value, joi.string().email()).error} />

            <label>Password</label>
            <Input.Password placeholder="••••••••••" meter validation={value => !joi.validate(value, joi.string().min(3)).error} />

            <label>Disabled</label>
            <Input.Text label="Normal" placeholder="Disabled" disabled />

            <label>Example</label>
            <Code>
              {[
                '<Input.Text name="text" placeholder="Text" />',
                '<Input.Password name="password" placeholder="Password" />',
                '<Input.Search name="search" placeholder="Search" />\n',
                '<Input.Text name="disabled" placeholder="Disabled" disabled />',
              ].join('\n')}
            </Code>
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
            <h2><img src="/icons/slider.png" alt="" /> Tag</h2>
            
            <TagGroup>
              <Tag text="abc" canRemove />
              <Tag text="def" canRemove />
              <Tag text="ghi " canRemove />
              <Tag text="jkl" canRemove />
              <Tag text="mno" canRemove />
              <Tag text="pqr" canRemove />
              <Tag text="stu" canRemove />
            </TagGroup>
          </Panel>

          <Panel>
            <h2><img src="/icons/image.png" alt="" /> Audio</h2>

            <Audio />
          </Panel>

          <Panel>
            <h2><img src="/icons/image.png" alt="" /> Image</h2>
            
            <Image />
          </Panel>

          <Panel className="container">
            <h2><img src="/icons/modal.png" alt="" /> Modal</h2>

            <Modal title="Log In" actions={[<Button text="Register" secondary />, <Button text="Log In" primary />]}>
              <label>Email</label>
              <Input.Text name="email" placeholder="example@example.com" validation={value => !joi.validate(value, joi.string().email()).error} />
              <label>Password</label>
              <Input.Password name="password" placeholder="••••••••••••••••" validation={value => !joi.validate(value, joi.string().min(2)).error} />
              <Switch label="Remember me?" value={true} />
            </Modal>
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
