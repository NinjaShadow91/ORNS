import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Landing = () => {
  return (
    <Container>
      <title>RNS</title>
      <Jumbotron className="shadow-sm">
        <h1>Online Recruitment Network System</h1>
        <p>
          Hire quickly, be ahead of competitors
        </p>
        <hr />
        <p>
          <Link to={ROUTES.SIGN_UP}>
            <Button variant="success">Get Started</Button>
          </Link>
          <span>             </span>
          <Link to={ROUTES.LOG_IN}>
            <Button variant="success">Log In</Button>
          </Link>
        </p>
      </Jumbotron>
    </Container>
  );
};

export default Landing;
