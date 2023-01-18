import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const RecruiterAllJobView = ({jobsPosted}) => {
  return (
    <Container>
      <Card className="shadow-sm">
      <Link to={ROUTES.POST_JOB}>
        <Button variant="success">Post Job</Button>
      </Link>
        <Card.Header as="h2" className="text-center">
          Job Posted Window
        </Card.Header>
        <Card.Body>
          <Table bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {jobsPosted.map((job, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{job.jobTitle}</td>
                  <td>
                    {console.log(job._id)}
                    <Link to={{
                      pathname:ROUTES.JOB_REVIEW_VIEW,
                      state: {job: job}
                    }}>
                      <Button variant="success">Review</Button>
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

RecruiterAllJobView.propTypes = {
  jobsPosted: PropTypes.array.isRequired
};

export default RecruiterAllJobView;
