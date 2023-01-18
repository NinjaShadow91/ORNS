import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAPI } from '../../services/api';

import RecruiterJobReviewView from '../../components/RecruiterJobReviewView';

class RecruiterJobReviewContainer extends Component {

  constructor(props){
    super(props);
    this.state = { job: this.props.location.state.job,
      appliedUsers: '',
      appliedUsersProfiles:'',
      alreadyReviewedApplicants: [],
      isReviewing: true,
      reviewApplicantID: '',
      analytics: '',
      analyticsAcquired: false,
      appliedUsersAcquired:false,
      appliedUsersProfilesAcquired:false
    };
  }

  async componentDidMount() {
    await this.getAppliedUsers();
    await this.getJobAnalytics();
    // await this.getAppliedUsersProfiles();
    // this.setState({ isReviewing: false, dataAcquired:true});
  }

  getAppliedUsers = () => {
    const {api}=this.props;
    api
      .getAppliedUsers(this.state.job.jobID)
      .then( response => {
        var calreadyReviewedApplicants=this.state.alreadyReviewedApplicants;
        response.data.map(i => {
          if ('reviewedDate' in i) calreadyReviewedApplicants.push(i.applicantID);
        });
        this.setState({appliedUsers: response.data, alreadyReviewedApplicants: calreadyReviewedApplicants ,appliedUsersAcquired: true});
      })
      .then( () => this.getAppliedUsersProfiles())
      .catch(error =>{console.log(error)});
  }

  getJobAnalytics = () => {
    const {api}=this.props;
    api
      .getJobAnalytics(this.state.job.jobID)
      .then( response => {
        (response.data).map(country => console.log("analytics ",country));
        this.setState({analytics: response.data, analyticsAcquired: true});
      })
      .catch(error =>{console.log(error)});
  }

  getAppliedUsersProfiles = () => {
    const {api}=this.props;
    const appliedUsers= this.state.appliedUsers;
    var sappliedUsers=[];
    appliedUsers.map(application=>{
      sappliedUsers.push(application.applicantID);
    });

    api
      .getAppliedUsersProfiles({jobID: this.state.job.jobID, appliedUsers: sappliedUsers})
      .then( response => {
        // console.log("in prof", response);
        this.setState({appliedUsersProfiles: response.data, appliedUsersProfilesAcquired: true});
      })
      .catch(error => console.log(error.response.data.message));
  }
  

  handleReview = (event) => {
    const {api} = this.props;
    const reviewApplicantID= Number(event.target.value);
    const jobID = this.state.job.jobID;
    console.log(jobID, reviewApplicantID);
    api
      .reviewApplication({jobID, reviewApplicantID})
      .then( response => {
        console.log(response);
        var nappliedUsers=[];
        var calreadyReviewedApplicants= this.state.alreadyReviewedApplicants;
        this.state.appliedUsers.map(user=>{
          if (user.userID==response.applicantID){
            nappliedUsers.push(response);
            calreadyReviewedApplicants.push(user.userID);
          }
          else nappliedUsers.push(user);
        })
        this.setState({appliedUsers: nappliedUsers,
                       alreadyReviewedApplicants: calreadyReviewedApplicants
                      });
        window.location.reload(false);
      })
      .catch(error => console.log(error.response.data.message));
  }
  
  render() {
    const { job, analyticsAcquired, analytics ,alreadyReviewedApplicants ,appliedUsersAcquired, appliedUsersProfilesAcquired, appliedUsers,appliedUsersProfiles, isReviewing, reviewApplicantID} = this.state;

    return (
      <RecruiterJobReviewView
        job={job}
        alreadyReviewedApplicants={alreadyReviewedApplicants}
        appliedUsers={appliedUsers}
        appliedUsersProfiles={appliedUsersProfiles}
        isReviewing={isReviewing}
        appliedUsersAcquired={appliedUsersAcquired}
        appliedUsersProfilesAcquired={appliedUsersProfilesAcquired}
        reviewApplicantID={reviewApplicantID}
        handleReview={this.handleReview}
        analyticsAcquired={analyticsAcquired}
        analytics={analytics}
      />
    );
  }
}

const mapStateToProps = state => {
  return { _id: state.user._id };
};

export default compose(connect(mapStateToProps), withAPI)(RecruiterJobReviewContainer);
