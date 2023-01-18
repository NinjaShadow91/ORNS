import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

const Profile = ({ firstName, lastName, email, mobileNumber,cstatus,
  country, zipCode, address, state,city,landmark,
  experience,education,skills,currentJob,pastJob,
  extra,certifications 
}) => {
  const history = useHistory();

  return (
    <Container className="col-md-8">
      <Card className="shadow-sm">
        <Card.Header as="h1" className="text-center">
          Profile
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="firstName"
                value={firstName}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="lastName"
                value={lastName}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="email"
                value={email}
              />
              </Form.Group>
              <Form.Group controlId="mobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="mobileNumber"
                value={mobileNumber}
              />
            </Form.Group>
            <Form.Group controlId="cstatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="cstatus"
                value={cstatus}
              />
              </Form.Group>
              <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="country"
                value={country}
              />
            </Form.Group>
            <Form.Group controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                readOnly
                type="number"
                name="zipCode"
                value={zipCode}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="address"
                value={address}
              />
            </Form.Group>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="state"
                value={state}
              />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="city"
                value={city}
              />
            </Form.Group>
            <Form.Group controlId="landmark">
              <Form.Label>Landmark</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="landmark"
                value={landmark}
              />
            </Form.Group>
            <Form.Group controlId="experience">
              <Form.Label>Experience(in years)</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="experience"
                value={experience}
              />
            </Form.Group>
            <Form.Group controlId="education">
              <Form.Label>Education</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="education"
                value={education}
              />
            </Form.Group>
            <Form.Group controlId="skills">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="skills"
                value={skills}
              />
            </Form.Group>
            <Form.Group controlId="currentJob">
              <Form.Label>Current Job</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="currentJob"
                value={currentJob}
              />
            </Form.Group>
            <Form.Group controlId="pastJob">
              <Form.Label>Past Jobs</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="pastJob"
                value={pastJob}
              />
            </Form.Group>
            <Form.Group controlId="extra">
              <Form.Label>Extras</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="extra"
                value={extra}
              />
            </Form.Group>
            <Form.Group controlId="certifications">
              <Form.Label>Certifications</Form.Label>
              <Form.Control
                readOnly
                type="text"
                name="certifications"
                value={certifications}
              />
            </Form.Group>
            <Button
              variant="success"
              onClick={() => history.push(ROUTES.PROFILE_EDIT)}
            >
              Edit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

Profile.propTypes = {
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
};

export default Profile;
