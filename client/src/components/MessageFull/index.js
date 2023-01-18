import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const MessageFullView = ({users}) => {
  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Chat Window
        </Card.Header>
        <Card.Body>
          <Table bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Chat</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{user.firstName+" "+user.lastName}</td>
                  <td>
                    {console.log(user.userID)}
                    <Link to={{
                      pathname:ROUTES.CHAT_VIEW,
                      state: {otherUserID: user.userID}
                    }}>
                      <Button variant="success">Chat</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

MessageFullView.propTypes = {
  users: PropTypes.array.isRequired
};

export default MessageFullView;
