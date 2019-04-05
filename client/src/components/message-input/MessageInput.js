import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  update(event) {
    this.setState({ text: this.refs.txt.value })
  }
  onChange(event) {
    this.setState({ text: event.target.value })
  }
  onSubmit(event) {
    this.setState({ text: event.target.value })
  }
  render() {
    return(
      <div className="mi-wrap">
        <div className="message-input">
          <Form>
            <Form.Group controlId="formBasicChat">
              <Form.Control 
                type="text"
                placeholder="Type something..."
                onChange={ this.onChange }
                onKeyPress={ this.onSubmit }
                value={ this.props.text }
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
