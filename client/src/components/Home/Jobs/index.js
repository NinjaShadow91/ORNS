import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

const Jobs = ({ handleSave, jobs, appliedJobs, savedJobs, handleApply, isApplyProcessing, isSaveProcessing, selectedJobId }) => {
  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Jobs
        </Card.Header>
        <Card.Body>
          <Table bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Company</th>
                <th>Responsibility</th>
                <th>View Job</th>
                <th>Apply</th>
                <th>Save</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{job.jobTitle}</td>
                  <td>{job.company}</td>
                  <td>{job.jobResponsibility}</td>
                  <td>
                    <Link to={{
                      pathname:ROUTES.JOB_VIEW,
                      state: {job_id: job._id}
                    }}>
                      <Button variant="success">View</Button>
                    </Link>
                  </td>
                  <td>
                    {appliedJobs.includes(job.jobID) ? (
                      <Button variant="success" disabled>
                        Applied
                      </Button>
                    ) : (
                      <Button
                        variant="success"
                        data-id={job._id}
                        onClick={handleApply}
                        disabled={isApplyProcessing && job._id === selectedJobId}
                      >
                        {isApplyProcessing && job._id === selectedJobId
                          ? 'Applying...'
                          : 'Apply'}
                      </Button>
                    )}
                  </td>
                  <td>
                    {savedJobs.includes(job.jobID) ? (
                      <Button variant="success" disabled>
                        Saved
                      </Button>
                    ) : (
                      <Button
                        variant="success"
                        data-id={job._id}
                        onClick={handleSave}
                        disabled={isSaveProcessing && job._id === selectedJobId}
                      >
                        {isSaveProcessing && job._id === selectedJobId
                          ? 'Saving...'
                          : 'Save'}
                      </Button>
                    )}
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

Jobs.propTypes = {
  jobs: PropTypes.array.isRequired,
  appliedJobs: PropTypes.array.isRequired,
  savedJobs: PropTypes.array.isRequired,
  handleApply: PropTypes.func.isRequired,
  isApplyProcessing: PropTypes.bool.isRequired,
  isSaveProcessing: PropTypes.bool.isRequired,
  selectedJobId: PropTypes.string.isRequired
};

export default Jobs;
