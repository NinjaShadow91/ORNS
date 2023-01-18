import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Form from 'react-bootstrap/Form';

const JobView = ({ handleSave, job, appliedJobs,  savedJobs, handleApply, isApplyProcessing, isSaveProcessing}) => {
    const selectedJobId= job.jobID;
    console.log(job);
  return (
    <Container>
        <Card className="shadow-sm">
            <Card.Header as="h2" className="text-center">
            Complete Job Description
            </Card.Header>
            <Card.Body className='shadow-sm'>
                <Card.Title>Job Title</Card.Title>
                {job.jobTitle}
            </Card.Body>
            <Card.Body className='shadow-sm'>
                <Card.Title>Company</Card.Title>
                {job.company}
            </Card.Body>
            <Card.Body className='shadow-sm'>
                <Card.Title>Contact Details</Card.Title>
                {job.contactDetails}
            </Card.Body>
            <Card.Body className='shadow-sm'>
                <Card.Title>Industry Type</Card.Title>
                {job.industryType}
            </Card.Body>
            <Card.Body className='shadow-sm'>
                <Card.Title>Job Location</Card.Title>
                {job.jobLocation}
            </Card.Body>
            <Card.Body className='shadow-sm'>
                <Card.Title>Approx Salary</Card.Title>
                {job.aprroxSalary}
            </Card.Body>
            <Card.Body className='shadow-sm'>
                <Card.Title>Max number of Applicants</Card.Title>
                {job.maxNumofApplicants}
            </Card.Body>
            <Card.Body className='shadow-sm'>
                <Card.Title>Max number of selections</Card.Title>
                {job.maxNumofSelections}
            </Card.Body>
            <Card.Body className='shadow-sm'>
                <Card.Title>Release Date</Card.Title>
                {job.releaseDate}
            </Card.Body>
            <Card.Body>
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
                {savedJobs.includes(job.jobID) ? (
                    <Button variant="success" className="ms-auto" disabled>
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
                    )
                }
                </Card.Body>
                
                <footer className='center'>
                <Link to={ROUTES.JOBS}>
                    <Button variant="success">Back</Button>
                </Link>
            </footer>
        </Card>
    </Container>
  );
};

export default JobView;