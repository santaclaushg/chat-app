import React, { Component } from 'react';
import './App.css';
import ChatContent from './components/chat-content/ChatContent';
import ContactEngine from './components/contact-engine/ContactEngine';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <ContactEngine />
        <ChatContent />
      
      </div>
    );
  }
}

export default App;
