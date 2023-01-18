import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { withAPI } from '../../services/api';
import { withRouter } from 'react-router-dom';
import SignUp from '../../components/SignUp';

class SignUpContainer extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    isProcessing: false,
    error: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isProcessing: true });

    const { api, setUser } = this.props;
    const { firstName, lastName, email, password, country } = this.state;

    api
      .signUp({ firstName, lastName, email, password, country })
      .then(response => {
        const { user, token } = response.data;

        localStorage.setItem('token', token);
        setUser({ user });
      })
      .catch(error =>
        this.setState({
          isProcessing: false,
          error: error.response.data.message
        })
      );
  };

  dismissAlert = () => this.setState({ error: null });

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      country,
      isProcessing,
      error
    } = this.state;

    return (
      <SignUp
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        country={country}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isProcessing={isProcessing}
        error={error}
        dismissAlert={this.dismissAlert}
      />
    );
  }
}

export default compose(
  connect(null, { setUser }),
  withAPI,
  withRouter
)(SignUpContainer);
