import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../../../../actions';
import { withAPI } from '../../../../../services/api';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../../../../constants/routes';

import Edit from '../../../../../components/Home/Profile/Edit';

class EditContainer extends Component {
  state = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    email: this.props.user.email,
    mobileNumber:this.props.user.mobileNumber,
    cstatus:this.props.user.cstatus,
    country:this.props.user.country,
    zipCode:this.props.user.zipCode,
    address:this.props.user.address,
    state:this.props.user.state,
    city:this.props.user.city,
    landmark:this.props.user.landmark,
    experience:this.props.user.experience,
    education:this.props.user.education,
    skills:this.props.user.skills,
    currentJob:this.props.user.currentJob,
    pastJob:this.props.user.pastJob,
    extra:this.props.user.extra,
    certifications:this.props.user.certifications,
    isProcessing: false,
    error: null
  };

  handleChange = e => {
        const integer_values = ["mobileNumber","zipCode"]
        if (integer_values.includes(e.target.name)) {
          this.setState({ [e.target.name]: Number(e.target.value) });
        } else {
          this.setState({ [e.target.name]: e.target.value });
        }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isProcessing: true });

    const { api, setUser, history } = this.props;
    const { firstName, lastName, email, mobileNumber,cstatus,
            country, zipCode, address, state,city,landmark,
            experience,education,skills,currentJob,pastJob,
            extra,certifications 
          } = this.state;

    const data = { firstName, lastName, email, mobileNumber,cstatus,
                    country, zipCode, address, state,city,landmark,
                    experience,education,skills,currentJob,pastJob,
                    extra,certifications };

    api
      .updateProfile(data)
      .then(() => api.getProfile())
      .then(response => setUser({ user: response.data }))
      .then(() => history.push(ROUTES.PROFILE))
      .catch(error =>
        this.setState({
          isProcessing: false,
          error: error.response.data.message
        })
      );
  };

  dismissAlert = () => this.setState({ error: null });

  render(){
    const {firstName, lastName, email, mobileNumber,cstatus,
      country, zipCode, address, state,city,landmark,
      experience,education,skills,currentJob,pastJob,
      extra,certifications, isProcessing, error
     } = this.state;

    return (<Edit
        firstName={firstName}
        lastName={lastName}
        email={email}
        mobileNumber={mobileNumber}
        cstatus={cstatus}
        country={country}
        zipCode={zipCode}
        addresss={address}
        state={state}
        city={city}
        landmark={landmark}
        experience={experience}
        education={education}
        skills={skills}
        currentJob={currentJob}
        pastJob={pastJob}
        extra={extra}
        certifications={certifications}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isProcessing={isProcessing}
        error={error}
        dismissAlert={this.dismissAlert}
      />
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default compose(
  connect(mapStateToProps, { setUser }),
  withAPI,
  withRouter
)(EditContainer);
