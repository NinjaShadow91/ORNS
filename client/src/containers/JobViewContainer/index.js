import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAPI } from '../../services/api';

import JobView from '../../components/JobView';

class JobViewContainer extends Component {
  state = { job: '', appliedJobs:[], savedJobs:[], isSaveProcessing: false, isApplyProcessing: false , selectedJobId:''};

  componentDidMount() {
    this.allJobSetter();
  }

  allJobSetter = () => {
    this.viewJob();
    this.getAppliedJobs();
    this.getSavedJobs();
    this.setState({ isApplyProcessing: false, isSaveProcessing: false });
  }

  viewJob = () => {
    const { api } = this.props;
    api
      .viewJob(this.props.location.state.job_id)
      .then(response => {
        this.setState({ job: response.data });
        console.log(response);
      })
      .catch(error => console.log(error.response.data.message));
  };

  getAppliedJobs = () => {
    const { api } = this.props;

    api
      .getAppliedJobs()
      .then(response => {
        this.setState({ appliedJobs: response.data });
      })
      .catch(error => console.log(error.response.data.message));
  };

  getSavedJobs = () => {
    const { api } = this.props;

    api
      .getSavedJobs()
      .then(response => {
        this.setState({ savedJobs: response.data });
      })
      .catch(error => console.log(error.response.data.message));
  };

  handleApply = e => {
    const { api } = this.props;
    const id = e.target.dataset.id;

    this.setState({ isApplyProcessing: true, selectedJobId: id });

    api
      .applyToJob(id)
      .then(() => this.allJobSetter())
      .catch(error => console.log(error.response.data.message));

    // this.setState({ isApplyProcessing: false});
  };

  handleSave = e => {
    const { api } = this.props;
    const id = e.target.dataset.id;

    this.setState({ isSaveProcessing: true, selectedJobId: id });

    api
      .saveJob(id)
      .then(() => this.allJobSetter())
      .catch(error => console.log(error.response.data.message));
  };

  render() {
    const { job, appliedJobs, savedJobs, isApplyProcessing, isSaveProcessing} = this.state;

    return (
      <JobView
        handleSave={this.handleSave}
        job={job}
        appliedJobs={appliedJobs}
        savedJobs={savedJobs}
        handleApply={this.handleApply}
        isApplyProcessing={isApplyProcessing}
        isSaveProcessing={isSaveProcessing}
      />
    );
  }
}

const mapStateToProps = state => {
  return { _id: state.user._id };
};

export default compose(connect(mapStateToProps), withAPI)(JobViewContainer);
