import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { withAPI } from '../../services/api';
import { withRouter } from 'react-router-dom';
import PostJob from '../../components/PostJob';
import ShowModal from '../ShowModal';
import * as ROUTES from '../../constants/routes';

class PostJobContainer extends Component {
  handleChange = e => {
        const integer_values = ["maxNumofApplicants","maxNumofSelections", "requiredExperience", "approxSalary"]
        if (integer_values.includes(e.target.name)) {
          this.setState({ [e.target.name]: Number(e.target.value) });
        } else {
          this.setState({ [e.target.name]: e.target.value });
        }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isProcessing: true });
    const { api } = this.props;
    const { jobTitle, company, contactDetails,jobResponsibility,jobLocation,
    maxNumofApplicants,maxNumofSelections,industryType, requirements, requiredDegree, requiredExperience,
    approxSalary
    } = this.state;

    api
      .postJob({ jobTitle, company, contactDetails,jobResponsibility,jobLocation,
        maxNumofApplicants,maxNumofSelections,industryType,
        requirements, requiredDegree, requiredExperience,
        approxSalary })
    this.setState({isRequestedSubmitted: true});
    
    // const doShow = false;
    // const modalMessage = 'Job Post Sucessfuly Submitted. Redirectory to job post page.';
    // const modalTitle = 'Submitted';
    // const cmodal = new ShowModal({doShow, modalTitle, modalMessage});
    // window.document.body.appendChild(cmodal);
    // cmodal.render();

    window.setTimeout(function(){ window.location = ROUTES.RECRUITER_VIEW; },2000);
  };

  dismissAlert = () => this.setState({ error: null });

  render() {
    return (
      <PostJob
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isProcessing={false}
        isRequestedSubmitted={false}
        error={null}
        dismissAlert={this.dismissAlert}
        />
    );
  }
}

export default compose(
  connect(null, { setUser }),
  withAPI,
  withRouter
)(PostJobContainer);
