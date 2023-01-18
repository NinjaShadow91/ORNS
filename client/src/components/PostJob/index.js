import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const PostJob = ({ handleChange, handleSubmit, isProcessing, isRequestedSubmitted, error, dismissAlert}) => {
  const history = useHistory();

  return (
    <Container className="col-md-8">
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Post Job
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
            <Form.Group controlId="jobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                required
                type="text"
                name="jobTitle"
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="company">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="company"
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="contactDetails">
              <Form.Label>Contact Details</Form.Label>
              <Form.Control
                required
                type="text"
                name="contactDetails"
                onChange={handleChange}
                disabled={isProcessing}
              />
              </Form.Group>
              <Form.Group controlId="jobResponsibility">
              <Form.Label>Job Responsibility</Form.Label>
              <Form.Control
                required
                type="text"
                name="jobResponsibility"
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="jobLocation">
              <Form.Label>Job Location</Form.Label>
              <Form.Control
                required
                type="text"
                name="jobLocation"
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="maxNumofApplicants">
              <Form.Label>Max number of Applicants</Form.Label>
              <Form.Control
                type="number"
                name="maxNumofApplicants"
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="maxNumofSelections">
              <Form.Label>Maximum number of Selections</Form.Label>
              <Form.Control
                type="number"
                name="maxNumofSelections"
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="industryType">
              <Form.Label>Industry Type</Form.Label>
              <Form.Control
                type="text"
                name="industryType"
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="requirements">
              <Form.Label>Requirements</Form.Label>
              <Form.Control
                type="text"
                name="requirements"
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="requiredDegree">
              <Form.Label>Required Degree</Form.Label>
              <Form.Control
                type="text"
                name="requiredDegree"
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="requiredExperience">
              <Form.Label>Required Experience</Form.Label>
              <Form.Control
                type="number"
                name="requiredExperience"
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="approxSalary">
              <Form.Label>Approximate Salary</Form.Label>
              <Form.Control
                required
                type="number"
                name="approxSalary"
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Button
              className="mr-2"
              variant="success"
              type="submit"
              disabled={isProcessing || isRequestedSubmitted}
            >
              {isProcessing ?  'Posting': 'Post'}
            </Button>
            <Button
              variant="light"
              onClick={() => history.push(ROUTES.RECRUITER_VIEW)}
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

PostJob.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    isProcessing: PropTypes.bool.isRequired,
    isRequestedSubmitted: PropTypes.bool.isRequired,
    error: PropTypes.string,
    dismissAlert: PropTypes.func.isRequired
};

export default PostJob;