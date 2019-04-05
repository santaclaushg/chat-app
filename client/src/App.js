import React, { Component } from 'react';
import './App.css';
import ChatContent from './components/chat-content/ChatContent';
import ContactEngine from './components/contact-engine/ContactEngine';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
    return (
      <div className="app-wrapper">
        <ContactEngine />
        <ChatContent />
        {this.state.response}
      </div>
    );
  }
}

export default App;
