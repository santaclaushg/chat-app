import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './style/style.scss';

export default class ContactProfile extends Component {
  render() {
    return(
      <div className="cp-wrapper">
        <div className="message-input">
          <Form>
            <Form.Group controlId="formBasicChat">
              <Form.Control 
                type="text" 
                placeholder="Type something..."
                onChange={ this.onChange }
                onKeyPress={ this.onSubmit }
                value={ this.state.text }
                ref="txt"
              />
            </Form.Group>
            <Button variant="primary" type="submit" value="Submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}