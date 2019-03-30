import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

export default class Message extends Component {
  render() {
    return(
      <div className="mess-wrap">
        <div className="message">
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  }
}
