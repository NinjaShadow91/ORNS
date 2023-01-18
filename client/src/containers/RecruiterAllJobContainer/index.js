import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAPI } from '../../services/api';

import RecruiterAllJobView from '../../components/RecruiterAllJobView';

class RecruiterAllJobContainer extends Component {
    state = { jobsPosted: []};
    
    componentDidMount() {
        this.getJobsPosted();
    }

    getJobsPosted = () => {
        const {api} = this.props;
        api.
            getJobsPosted()
            .then(response => {
                this.setState({jobsPosted: response.data});
            })
            .catch(error => console.log(error.response.data.message));
    }

    render() {
        const {jobsPosted} = this.state;

        return (
          <RecruiterAllJobView jobsPosted={jobsPosted}/>
        );
      }
}

const mapStateToProps = state => {
    return { _id: state.user._id };
};

export default compose(connect(mapStateToProps), withAPI)(RecruiterAllJobContainer);