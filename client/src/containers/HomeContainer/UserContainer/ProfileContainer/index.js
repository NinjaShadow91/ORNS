import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from '../../../../components/Home/Profile';

class ProfileContainer extends Component {
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
    certifications:this.props.user.certifications
  };

  render() {
    const { firstName, lastName, email, mobileNumber,cstatus,
      country, zipCode, address, state,city,landmark,
      experience,education,skills,currentJob,pastJob,
      extra,certifications 
    } = this.state;

    return <Profile firstName={firstName} lastName={lastName} email={email} mobileNumber={mobileNumber} cstatus={cstatus}
    country={country} zipCode={zipCode} address={address} state={state} city={city} landmark={landmark}
    experience={experience} education={education} skills={skills} currentJob={currentJob} pastJob={pastJob}
    extra={extra} certifications={certifications}
    />;
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(ProfileContainer);
