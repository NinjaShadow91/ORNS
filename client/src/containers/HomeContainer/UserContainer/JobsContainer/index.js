import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAPI } from '../../../../services/api';

import Jobs from '../../../../components/Home/Jobs';

class JobsContainer extends Component {
  state = { jobs: [], appliedJobs:[], savedJobs:[], isSaveProcessing: false, isApplyProcessing: false, selectedJobId: '' };

  componentDidMount() {
    this.allJobSetter();
  }

  allJobSetter = () => {
    this.getJobs();
    this.getAppliedJobs();
    this.getSavedJobs();
    this.setState({ isApplyProcessing: false, isSaveProcessing: false });
  }

  getJobs = () => {
    const { api } = this.props;

    api
      .getJobs()
      .then(response => {
        this.setState({ jobs: response.data });
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
    
    // this.setState({ isSaveProcessing: false});
  };

  render() {
    const { jobs, appliedJobs, savedJobs, isApplyProcessing, isSaveProcessing, selectedJobId } = this.state;

    return (
      <Jobs
        handleSave={this.handleSave}
        jobs={jobs}
        appliedJobs={appliedJobs}
        savedJobs={savedJobs}
        handleApply={this.handleApply}
        isApplyProcessing={isApplyProcessing}
        isSaveProcessing={isSaveProcessing}
        selectedJobId={selectedJobId}
      />
    );
  }
}

const mapStateToProps = state => {
  return { _id: state.user._id };
};

export default compose(connect(mapStateToProps), withAPI)(JobsContainer);
