import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { element } from 'prop-types';

const ChatView = ({otherUserID, isSending, handleChange, recvMessages, sentMessages, messages, handleSend}) => {
  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Chat Window
        </Card.Header>
        <Card.Body>
          <Table bordered={false}
                hover={true}
          >
            <thead>
              <tr>
                <th>Recieved Messages</th>
                <th>Sent Messages</th>
              </tr>
            </thead>
            <tbody>
            {messages && messages.map((message, i) => (
                  sentMessages.includes(message) ? 
                    <tr key={i}><td></td><td>{message.messageMatter}</td></tr> :
                    <tr key={i}><td>{message.messageMatter}</td><td></td></tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer>
          <Form onSubmit={handleSend}>
          <Form.Group controlId="messageMatter">
              <Form.Label>Send Message</Form.Label>
              <Form.Control
                required
                type="text"
                name="messageMatter"
                onChange={handleChange}
                disabled={isSending}
              />
            </Form.Group>
          <Button
              className="mr-2"
              variant="success"
              type="submit"
              disabled={isSending}
            >
              {isSending ?  'Sending': 'Send'}
            </Button>
          <br/><br/>
          <Link to={{
                      pathname:ROUTES.HOME,
          }}>
            <Button variant="success">Back</Button>
          </Link>
          </Form>
          </Card.Footer>
      </Card>
    </Container>
  );
};


export default ChatView;