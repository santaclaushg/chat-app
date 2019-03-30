import React, { Component } from 'react';
import './style/style.scss';
import Message from '../message/Message'
import MessageInput from '../message-input/MessageInput'
import ContactProfile from '../contact-profile/ContactProfile'

export default class ChatContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
    this.update = this.update.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  update(event) {
    this.setState({ text: this.refs.txt.value })
  }
  onChange(event) {
    this.setState({ text: event.target.value })
  }
  render() {
    return (
      <div className="cc-wrap">
        <ContactProfile />
        <Message />
        <MessageInput />
      </div>
    );
  }
}