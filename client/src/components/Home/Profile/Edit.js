import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

const Edit = ({
      firstName, lastName, email, mobileNumber,cstatus,
      country, zipCode, address, state,city,landmark,
      experience,education,skills,currentJob,pastJob,
      extra,certifications,
      handleChange, handleSubmit,isProcessing,error,dismissAlert
}) => {
  const history = useHistory();

  return (
    <Container className="col-md-8">
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Edit Profile
        </Card.Header>
        <Card.Body>
          <Alert
            variant="danger"
            show={error}
            dismissible
            onClose={dismissAlert}
          >
            {error}
          </Alert>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                disabled={isProcessing}
              />
              </Form.Group>
              <Form.Group controlId="mobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                name="mobileNumber"
                value={mobileNumber}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="cstatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                name="cstatus"
                value={cstatus}
                onChange={handleChange}
                disabled={isProcessing}
              />
              </Form.Group>
              <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={country}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="number"
                name="zipCode"
                value={zipCode}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={address}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={state}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={city}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="landmark">
              <Form.Label>Landmark</Form.Label>
              <Form.Control
                type="text"
                name="landmark"
                value={landmark}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="experience">
              <Form.Label>Experience(in years)</Form.Label>
              <Form.Control
                type="text"
                name="experience"
                value={experience}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="education">
              <Form.Label>Education</Form.Label>
              <Form.Control
                type="text"
                name="education"
                value={education}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="skills">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                type="text"
                name="skills"
                value={skills}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="currentJob">
              <Form.Label>Current Job</Form.Label>
              <Form.Control
                type="text"
                name="currentJob"
                value={currentJob}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="pastJob">
              <Form.Label>Past Jobs</Form.Label>
              <Form.Control
                type="text"
                name="pastJob"
                value={pastJob}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="extra">
              <Form.Label>Extras</Form.Label>
              <Form.Control
                type="text"
                name="extra"
                value={extra}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="certifications">
              <Form.Label>Certifications</Form.Label>
              <Form.Control
                type="text"
                name="certifications"
                value={certifications}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Button
              className="mr-2"
              variant="success"
              type="submit"
              disabled={isProcessing}
            >
              {isProcessing ? 'Updating...' : 'Update'}
            </Button>
            <Button
              variant="light"
              onClick={() => history.push(ROUTES.PROFILE)}
              disabled={isProcessing}
            >
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

Edit.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  email: PropTypes.string.isRequired,
  mobileNumber: PropTypes.number,
  cstatus: PropTypes.string,
  country:PropTypes.string.isRequired,
  zipCode:PropTypes.number,
  address:PropTypes.string,
  state:PropTypes.string,
  city:PropTypes.string,
  landmark:PropTypes.string,
  experience:PropTypes.string,
  education:PropTypes.string,
  skills:PropTypes.string,
  currentJob:PropTypes.string,
  pastJob:PropTypes.string,
  extra:PropTypes.string,
  certifications:PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isProcessing: PropTypes.bool,
  error: PropTypes.string,
  dismissAlert: PropTypes.func
};

export default Edit;
