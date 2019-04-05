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
  }
  render() {
    return (
      <div className="cc-wrap">
        <ContactProfile />
        <Message />
        <MessageInput text={this.state.text} />
      </div>
    );
  }
}