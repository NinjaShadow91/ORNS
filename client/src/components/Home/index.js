import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import MessageFullContainer from '../../containers/MessageFullContainer';

const User = () => {
  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Body>
          <h1>User Home</h1>
          <MessageFullContainer/>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default User;
