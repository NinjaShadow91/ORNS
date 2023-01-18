import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Form from 'react-bootstrap/Form';

const RecruiterJobReviewView = ({ handleReview,analytics, analyticsAcquired, alreadyReviewedApplicants ,job, appliedUsersProfilesAcquired, appliedUsersAcquired, appliedUsers, appliedUsersProfiles, isReviewing, reviewApplicantID}) => {
  const selectedJobId= job.jobID;
  console.log(job);
  console.log(appliedUsers);
  console.log(appliedUsersProfiles);
  console.log("time");
  return (
    <Container>
        <Card className="shadow-sm">
          <Card.Header>
           Job ID: {job.jobID}
           <br/>
           Job Title: {job.jobTitle}
           <br/>
           Job Responsibility: {job.jobResponsibility}
          </Card.Header>
           {(appliedUsersAcquired && appliedUsersProfilesAcquired) ? appliedUsersProfiles.map(function(userProfile, i){
              return <Card.Body key={i}>
                <b>Applicant Name: </b>{userProfile.firstName} {userProfile.lastName}
                <br/>
                <b>Applicant ID: </b>{userProfile.userID}
                <br/>
                <Button variant="success"
                  value={userProfile.userID}
                  onClick={handleReview}
                  disabled={alreadyReviewedApplicants.includes(userProfile.userID)}
                >
                  {alreadyReviewedApplicants.includes(userProfile.userID) ? 'Reviewed' : 'Review'}
                </Button>
                </Card.Body>;
            }): (<h3>Acquiring data, please wait..</h3>)
            }
            <Card.Body>
                    <Card.Title>Job Analytics<br/>Job Views Per Country</Card.Title>
                    {analyticsAcquired && analytics.map(ele => {
                        return <p>{ele.name}: {ele.count}</p>
                    })}
                </Card.Body>
            <Card.Footer>
            <Link to={{
                      pathname:ROUTES.RECRUITER_VIEW,
                    }}>
                      <Button variant="success">Back</Button>
              </Link>
            </Card.Footer>
        </Card>
    </Container>
  );
};

export default RecruiterJobReviewView;